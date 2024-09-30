/**
 * Represents an image in a gallery.
 */
interface GalleryImage {
  url: string;
  alt: string;
}

/**
 * Represents a section of content on a page.
 */
export interface Section {
  id: string;
  title: string;
  content: string | string[];
  image?: string;
  gallery?: [GalleryImage, GalleryImage, GalleryImage];
  subsections?: Section[];
}

/**
 * Base interface for page data.
 */
export interface PageData {
  title: string;
  subtitle: string;
  imageUrl?: string;
  sections?: Section[];
}

/**
 * Represents data for an event page.
 * Extends PageData with an excerpt and simplified sections.
 */
export interface EventData extends PageData {
  excerpt: string;
  sections?: Section[];
}

/**
 * Represents data for a character page.
 * Extends PageData with character-specific fields.
 */
export interface CharacterData extends PageData {
  imageUrl: string; // Making imageUrl required for CharacterData
  pronunciation?: string;
  tags: string[];
  sections?: Section[];
}
