import Link from "next/link";
import { Project } from "@/lib/types";

function PortfolioLink({project}: {project: Project}) {
    return (
        <li key={project.slug}>
            {project.title} —{" "}
            {project.live && (
                <Link
                    href={project.live}
                    target="_blank"
                    className="text-orange-500 hover:underline"
                >
                    Live Demo
                </Link>
            )}
            {project.repo && project.live && " / "}
            {project.repo && (
                <Link
                    href={project.repo}
                    target="_blank"
                    className="text-orange-500 hover:underline"
                >
                    GitHub
                </Link>
            )}
        </li>
    );
}

export default PortfolioLink;