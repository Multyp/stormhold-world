export interface Section {
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
  subsections?: Section[];
}

export interface PageData {
  title: string;
  sections?: Section[];
}

export interface EventData extends PageData {
  title: string;
  subtitle: string;
  excerpt: string;
  sections?: {
    id: string;
    title: string;
    content: string | string[];
  }[];
}

export interface CharacterData extends PageData {
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
