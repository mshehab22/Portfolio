import { Link } from "wouter";
import { ArrowRight, ImageIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Tag } from "./Tag";
import { StatusIndicator } from "./StatusIndicator";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="group h-full flex flex-col hover-elevate transition-shadow duration-200" data-testid={`card-project-${project.slug}`}>
      {project.thumbnailImage ? (
        <div className="aspect-video w-full overflow-hidden rounded-t-md">
          <img 
            src={project.thumbnailImage} 
            alt={project.title}
            className="w-full h-full object-cover"
            data-testid={`img-thumbnail-${project.slug}`}
          />
        </div>
      ) : (
        <div className="aspect-video w-full bg-muted rounded-t-md flex items-center justify-center" data-testid={`placeholder-thumbnail-${project.slug}`}>
          <ImageIcon className="h-8 w-8 text-muted-foreground/50" />
        </div>
      )}
      <CardHeader className="flex flex-col gap-3 pb-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Tag variant="category" data-testid={`text-category-${project.slug}`}>{project.category}</Tag>
          <StatusIndicator status={project.status} data-testid={`text-status-${project.slug}`} />
        </div>
        <h3 className="text-xl font-semibold text-foreground" data-testid={`text-title-${project.slug}`}>{project.title}</h3>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground leading-relaxed" data-testid={`text-purpose-${project.slug}`}>{project.shortPurpose}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech, index) => (
            <Tag key={tech} data-testid={`text-tech-${project.slug}-${index}`}>{tech}</Tag>
          ))}
          {project.tech.length > 4 && (
            <Tag data-testid={`text-tech-${project.slug}-more`}>+{project.tech.length - 4}</Tag>
          )}
        </div>
      </CardContent>
      <CardFooter className="pt-4">
        <Link href={`/projects/${project.slug}`} className="w-full" data-testid={`card-link-${project.slug}`}>
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:underline" data-testid={`link-view-${project.slug}`}>
            View Details
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </CardFooter>
    </Card>
  );
}
