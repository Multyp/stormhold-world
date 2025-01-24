import express, { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import cors from "cors";
import fs from "fs/promises";
import path from "path";
import { z } from "zod";

// Load environment variables
dotenv.config();

const app = express();

// Enhanced Security Middleware
app.use(helmet());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// CORS with strict configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS?.split(",") || [],
  methods: ["GET"],
  allowedHeaders: ["X-API-Key", "Content-Type"],
  credentials: true,
};
app.use(cors(corsOptions));

// API Key Validation Middleware
const validateApiKey = (req: Request, res: Response, next: NextFunction) => {
  const apiKey = req.get("X-API-Key");

  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(403).json({ error: "Invalid or missing API Key" });
  }

  next();
};

// Input Validation Schema
const ResourceParamSchema = z.object({
  resource: z.string().min(1).max(50),
  filename: z.string().min(1).max(100).optional(),
});

// Helper function to safely resolve file path
const safelyResolveFilePath = (
  baseDir: string,
  resource: string,
  filename?: string
): string => {
  const resolvedBase = path.resolve(baseDir);
  const resolvedPath = path.resolve(
    path.join(resolvedBase, resource, filename || "")
  );

  // Ensure the resolved path is within the base directory
  if (!resolvedPath.startsWith(resolvedBase)) {
    throw new Error("Invalid file path");
  }

  return resolvedPath;
};

// Load JSON file with additional security checks
const loadJsonFile = async (filePath: string) => {
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    // Optional: Add additional JSON parsing validation if needed
    return JSON.parse(fileContent);
  } catch (error) {
    throw new Error("File read or parse error");
  }
};

// Get resource file endpoint
app.get(
  "/:resource/:filename?",
  validateApiKey,
  async (req: Request, res: Response) => {
    try {
      // Validate input
      const { resource, filename } = ResourceParamSchema.parse(req.params);

      // Potential search directories
      const searchDirs = [
        path.join(process.cwd(), resource),
        path.join(process.cwd(), "assets", resource),
      ];

      // Try each directory
      for (const dir of searchDirs) {
        const supportedExtensions = [".json", ".css", ".webp"];

        for (const ext of supportedExtensions) {
          if (!filename) continue;

          const filePath = path.join(dir, `${filename}${ext}`);

          try {
            const resolvedPath = safelyResolveFilePath(
              process.cwd(),
              dir,
              `${filename}${ext}`
            );

            switch (ext) {
              case ".json":
                const jsonContent = await loadJsonFile(resolvedPath);
                return res.json(jsonContent);

              case ".css":
                const cssContent = await fs.readFile(resolvedPath, "utf-8");
                return res.type("text/css").send(cssContent);

              case ".webp":
                const webpBuffer = await fs.readFile(resolvedPath);
                return res.type("image/webp").send(webpBuffer);
            }
          } catch {
            // Continue to next iteration if file not found or error occurs
            continue;
          }
        }
      }

      // If no file found
      return res.status(404).json({ error: "File not found" });
    } catch (error) {
      console.error(error);

      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: "Invalid input" });
      }

      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// List resources endpoint
app.get("/:resource", validateApiKey, async (req: Request, res: Response) => {
  try {
    const { resource } = ResourceParamSchema.parse(req.params);

    // Load descriptor
    const descriptorPath = path.join(
      process.cwd(),
      "assets",
      "__descriptor__.json"
    );
    const descriptor = await loadJsonFile(descriptorPath);

    const resourceType = descriptor[resource]?.type || "unknown";

    if (resource === "assets") {
      const assetsPath = path.join(process.cwd(), "assets");
      const folders = await fs.readdir(assetsPath, { withFileTypes: true });

      const folderList = folders
        .filter((dirent) => dirent.isDirectory())
        .map((folder) => ({
          folder: folder.name,
          type: descriptor[folder.name]?.type || "unknown",
        }));

      return res.json(folderList);
    }

    // List JSON files
    const searchDirs = [
      path.join(process.cwd(), resource),
      path.join(process.cwd(), "assets", resource),
    ];

    const jsonObjects: any[] = [];

    for (const dir of searchDirs) {
      try {
        const files = await fs.readdir(dir);
        const jsonFiles = files.filter((f) => f.endsWith(".json"));

        for (const file of jsonFiles) {
          const filePath = path.join(dir, file);
          const content = await loadJsonFile(filePath);
          jsonObjects.push(content);
        }
      } catch {
        // Ignore errors if directory doesn't exist
        continue;
      }
    }

    if (jsonObjects.length === 0) {
      return res.status(404).json({ error: "No JSON files found" });
    }

    return res.json({
      type: resourceType,
      content: jsonObjects,
    });
  } catch (error) {
    console.error(error);

    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: "Invalid input" });
    }

    res.status(500).json({ error: "Internal server error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
