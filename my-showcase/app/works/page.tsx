import Link from "next/link";
import projects from "@/data/projects.json";
import Image from "next/image";

export default function WorksPage() {
  return (
    <main className="bg-orange-50 min-h-screen px-6 py-10 mt-16">
      <h1 className="text-4xl font-extrabold text-orange-800 drop-shadow-md mb-10 text-center">
        My Works
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="bg-white border-4 border-orange-200 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-5 flex flex-col items-center"
          >
            <Image
              src={project.image}
              alt={project.title}
              className="rounded-lg border-2 border-orange-100 mb-4"
              width={200}
              height={200}
            />
            <h2 className="text-2xl font-semibold text-orange-800 mb-2">
              {project.title}
            </h2>
            <p className="text-orange-600 mb-4">{project.stack.join(", ")}</p>

            <Link
              href={`/works/${project.slug}`}
              className="mt-auto inline-block bg-orange-200 text-orange-800 font-semibold px-4 py-2 rounded-full hover:bg-orange-300 transition-all duration-200 text-center shadow-md"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
