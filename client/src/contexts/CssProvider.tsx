import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type CssContextType = string | undefined;

const CssContext = createContext<CssContextType>(undefined);

export const CssProvider = ({ children }: { children: ReactNode }) => {
  const [css, setCss] = useState<string>("");

  useEffect(() => {
    const fetchCss = async () => {
      const cachedCss = localStorage.getItem("themeCss");

      if (cachedCss) {
        setCss(cachedCss);
      } else {
        const response = await fetch(
          "https://stormhold.miguel-dasilva.com/css/themes",
          {
            headers: {
              "X-API-Key": process.env.NEXT_PUBLIC_API_KEY
                ? process.env.NEXT_PUBLIC_API_KEY
                : "",
            },
          },
        );

        if (response.ok) {
          const cssText = await response.text();
          setCss(cssText);
          localStorage.setItem("themeCss", cssText);
        } else {
          console.error("Failed to load CSS:", response.statusText);
        }
      }
    };

    fetchCss();
  }, []);

  useEffect(() => {
    // Apply the fetched CSS to the document head
    if (css) {
      const styleElement = document.createElement("style");
      styleElement.textContent = css;
      document.head.appendChild(styleElement);

      // Clean up the style element on component unmount
      return () => {
        document.head.removeChild(styleElement);
      };
    }
  }, [css]); // Run this effect whenever `css` changes

  return <CssContext.Provider value={css}>{children}</CssContext.Provider>;
};

export const useCss = () => {
  const context = useContext(CssContext);
  if (context === undefined) {
    throw new Error("useCss must be used within a CssProvider");
  }
  return context;
};
