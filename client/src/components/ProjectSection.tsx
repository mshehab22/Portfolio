import { ProjectCard } from "./ProjectCard";
import type { Project } from "@/data/projects";

interface ProjectSectionProps {
  title: string;
  projects: Project[];
}

export function ProjectSection({ title, projects }: ProjectSectionProps) {
  if (projects.length === 0) return null;

  return (
    <section className="py-12 md:py-16" data-testid={`section-${title.toLowerCase()}`}>
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8" data-testid={`text-section-title-${title.toLowerCase()}`}>{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  );
}
