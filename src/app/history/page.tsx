"use client";

/* Global imports */
import { useEffect, useState } from "react";

/* Scoped imports */
/* Local imports */
import HistoryEvents from "@/components/app/HistoryEvents";
import dataUrls from "@/constants/dataUrls";
import LoadingError from "@/components/app/LoadingError";

interface Event {
  title: string;
  excerpt: string;
  duration: string;
  link: string;
  date_id: string;
}

/**
 * HistoryPage component fetches and displays a list of historical events.
 * It handles loading and error states during the fetch process.
 *
 * @returns {JSX.Element} The rendered HistoryPage component.
 */
const HistoryPage = (): JSX.Element => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  /**
   * Fetch history events from the API on component mount.
   */
  useEffect(() => {
    const fetchEvents = async (): Promise<void> => {
      try {
        const response = await fetch(dataUrls.history, {
          headers: {
            "X-API-Key": process.env.NEXT_PUBLIC_API_KEY
              ? process.env.NEXT_PUBLIC_API_KEY
              : "",
          },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch history events");
        }
        const data: Event[] = await response.json();
        setEvents(data.sort((a, b) => (a.date_id > b.date_id ? 1 : -1))); // Sort events by date_id
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Render loading state
  if (loading)
    return (
      <LoadingError
        error={error}
        loading={true}
      />
    );

  // Render error state
  if (error)
    return (
      <LoadingError
        error={error}
        loading={false}
      />
    );

  // Render events once loaded
  return <HistoryEvents events={events} />;
};

export default HistoryPage;
