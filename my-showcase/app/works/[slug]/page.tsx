import projects from "@/data/projects.json";
import Image from "next/image";
import { WorkDetailProps } from "@/lib/types";

// type WorkDetailProps = {
//   params: Promise<{ slug: string }>;
// };


export default async function WorkDetailPage({ params }: WorkDetailProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="bg-orange-50 min-h-screen flex items-center justify-center text-orange-700 text-xl mt-16">
        Project not found.
      </main>
    );
  }

  return (
    <main className="bg-orange-50 min-h-screen px-6 py-10 mt-16">
      <div className="max-w-4xl mx-auto bg-white border-4 border-orange-200 rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-extrabold text-orange-800 drop-shadow-md mb-4">
          {project.title}
        </h1>
        <p className="text-orange-700 leading-relaxed mb-6">
          {project.description}
        </p>
        <p className="font-semibold text-orange-600 mb-6">
          Stack: <span className="font-normal">{project.stack.join(", ")}</span>
        </p>

        <div className="flex gap-4 mb-8">
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-200 text-orange-800 font-semibold px-4 py-2 rounded-full hover:bg-orange-300 transition-all duration-200 shadow-md"
            >
              View Repository
            </a>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.screenshots.map((src, i) => (
            <Image
              key={i}
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              className="rounded-lg border-2 border-orange-100 shadow-md"
              width={500}
              height={350}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
