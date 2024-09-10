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
  pronunciation?: string;
  tags?: string[];
  excerpt?: string;
  sections: Section[];
}
