import fs from "fs";
import path from "path";
import { Metadata } from "next";
import HistoryEvents from "@/components/app/HistoryEvents";

interface Event {
  title: string;
  excerpt: string;
  link: string;
}

export const metadata: Metadata = {
  title: "History of STORMHOLD",
};

const getAllHistoryEvents = (): Event[] => {
  const eventsDir = path.join(process.cwd(), "history");
  const filenames = fs.readdirSync(eventsDir);
  const events = filenames.map(filename => {
    const filePath = path.join(eventsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const event = JSON.parse(fileContents);
    return {
      title: event.title,
      excerpt: event.excerpt,
      link: `/history/${filename.replace(".json", "")}`,
    };
  });
  return events;
};

const HistoryPage = () => {
  const events = getAllHistoryEvents();
  return <HistoryEvents events={events} />;
};

export default HistoryPage;
