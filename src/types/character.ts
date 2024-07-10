export interface Character {
  title: string;
  imageUrl: string;
  tags: string[];
}

export interface characterData {
  title: string;
  subtitle: string;
  imageUrl: string;
  pronunciation?: string;
  tags: string[];
  sections?: {
    id: string;
    title: string;
    content: string | string[];
    image?: string;
    gallery?: [
      {
        url: string;
        alt: string;
      },
      {
        url: string;
        alt: string;
      },
      {
        url: string;
        alt: string;
      },
    ];
  }[];
}
