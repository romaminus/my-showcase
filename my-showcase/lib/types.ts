export interface Contact {
    id: string;
    name: string;
    email: string;
    message: string;
};
export type WorkDetailProps = {
  params: Promise<{ slug: string }>;
};
export type FormData = Omit<Contact, 'id'>;