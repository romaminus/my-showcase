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
    stack: string[];
    image: string;
    description: string;
    repo: string;
    live?: string | null;
    screenshots?: string[];
}
export type FormData = Omit<Contact, 'id'>;