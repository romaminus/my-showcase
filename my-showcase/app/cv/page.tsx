
// import Link from "next/link";
import ContactsBlock from "@/components/ContactBlock";
import PortfolioLink from "@/components/PortfolioLink";
import projects from "@/data/projects.json";

export default function CVSection() {
  return (
    <section className="bg-orange-50 min-h-screen px-6 py-12 mt-16">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border-4 border-orange-200 p-8">

        <h1 className="text-4xl font-extrabold text-orange-800 drop-shadow-md mb-2">
          Roman Belov
        </h1>
        <h2 className="text-lg font-semibold text-orange-600 mb-6">
          Front-End Developer
        </h2>

        <h3 className="text-2xl font-semibold text-orange-700 mb-2">Skills</h3>
        <p className="text-orange-600 mb-6">
          HTML5, CSS3, JavaScript, Node.js, React, Redux Toolkit, Zustand, Next.js,
          TailwindCSS, Firebase, MongoDB, Material UI, SCSS, REST API, Git, Webpack, Jest.
        </p>

        <h3 className="text-2xl font-semibold text-orange-700 mb-2">Work Experience</h3>
        <ul className="list-disc pl-6 text-orange-600 space-y-2 mb-6">
          <li>
            <strong>Freelance (2025 – present)</strong> — Developed SPA for small business using React, Tailwind, Zustand, Firebase.
          </li>
          <li>
            <strong>Pet Projects (2025 – present)</strong> — Created multiple React-based apps, integrated APIs, and deployed projects to GitHub and Firebase.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-orange-700 mb-2">Portfolio</h3>
        <ul className="list-disc pl-6 text-orange-600 space-y-2 mb-6">
          {projects.map(el => <PortfolioLink key={el.slug} project={el} />)}
        </ul>

        <h3 className="text-2xl font-semibold text-orange-700 mb-2">Contacts</h3>
        <ContactsBlock />
      </div>
    </section>
  );
}
