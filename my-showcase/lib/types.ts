export interface Contact {
    id: string;
    name: string;
    email: string;
    message: string;
};
export type WorkDetailProps = {
  params: Promise<{ slug: string }>;
};
export interface ImageGalleryProps {
  screenshots: string[];
  title: string;
}
export interface Project {
  slug: string;
  title: string;
  description: string;
  stack: string[];
  repo?: string;
  screenshots: string[];
}
export type FormData = Omit<Contact, 'id'>;