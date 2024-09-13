/* Global imports */
import fs from "fs";
import path from "path";
import { Metadata } from "next";
/* Scoped imports */
/* Local imports */
import HistoryEvents from "@/components/app/HistoryEvents";

interface Event {
  title: string;
  excerpt: string;
  duration: string;
  link: string;
  date_id: string;
}

export const metadata: Metadata = {
  title: "History of STORMHOLD",
};

const blocklist = ["README.md"];

const getAllHistoryEvents = (): Event[] => {
  const eventsDir = path.join(process.cwd(), "history");
  const filenames = fs.readdirSync(eventsDir);

  const filteredFilenames = filenames.filter(
    filename => filename.endsWith(".json") && !blocklist.includes(filename),
  );

  const events = filteredFilenames.map(filename => {
    const filePath = path.join(eventsDir, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const event = JSON.parse(fileContents);
    return {
      title: event.title,
      excerpt: event.excerpt,
      duration: event.duration,
      link: `/history/${filename.replace(".json", "")}`,
      date_id: event.date_id,
    };
  });

  events.sort((a, b) => (a.date_id > b.date_id ? 1 : -1));

  return events;
};

const HistoryPage = () => {
  const events = getAllHistoryEvents();
  return <HistoryEvents events={events} />;
};

export default HistoryPage;
