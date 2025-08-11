// Contact form — клієнтський компонент + app/api/contact/route.ts (POST) → 
// відправка на email або збереження в БД
import ContactsBlock from "@/components/ContactBlock";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-fit bg-orange-50 grid grid-cols-1 md:grid-cols-2 gap-4 px-6 py-12 items-start mt-16">
      <div className="bg-white rounded-xl shadow-md p-8 border border-orange-200 self-stretch">
        <ContactsBlock />
      </div>
      <ContactForm />
    </div>
  );
}
