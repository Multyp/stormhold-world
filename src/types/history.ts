export interface HistoricalEvent {
  title: string;
}

export interface EventData {
  title: string;
  subtitle: string;
  excerpt: string;
  sections?: {
    id: string;
    title: string;
    content: string | string[];
    image?: string;
    gallery?: {
      url: string;
      alt: string;
    }[];
  }[];
}
