import { useParams, Link } from "wouter";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { SiGithub, SiYoutube } from "react-icons/si";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/Tag";
import { StatusIndicator } from "@/components/StatusIndicator";
import { getProjectBySlug } from "@/data/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || "");

  if (!project) {
    return (
      <Layout>
        <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24 text-center">
          <h1 className="text-2xl font-semibold text-foreground mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">
            The project you're looking for doesn't exist.
          </p>
          <Link href="/projects" data-testid="nav-back-to-projects">
            <Button data-testid="button-back-to-projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
        <nav className="mb-8">
          <Link href="/projects" data-testid="nav-breadcrumb-projects">
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors" data-testid="link-breadcrumb-projects">
              <ArrowLeft className="h-4 w-4" />
              Back to Projects
            </span>
          </Link>
        </nav>

        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-project-title">
            {project.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <Tag variant="category" data-testid="text-detail-category">{project.category}</Tag>
            <StatusIndicator status={project.status} data-testid="text-detail-status" />
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed" data-testid="text-project-purpose">
            {project.shortPurpose}
          </p>
        </header>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-section-tech">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, index) => (
              <Tag key={tech} data-testid={`text-detail-tech-${index}`}>{tech}</Tag>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-section-systems">Systems & Features</h2>
          <ul className="space-y-3">
            {project.systemsBullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3 text-muted-foreground" data-testid={`text-bullet-${index}`}>
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-foreground flex-shrink-0" />
                <span className="leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </section>

        {project.links && Object.keys(project.links).length > 0 && (
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-6" data-testid="text-section-links">Links</h2>
            <div className="flex flex-wrap gap-3">
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noopener noreferrer" data-testid="anchor-github">
                  <Button variant="outline" data-testid="link-github">
                    <SiGithub className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                </a>
              )}
              {project.links.demo && (
                <a href={project.links.demo} target="_blank" rel="noopener noreferrer" data-testid="anchor-demo">
                  <Button data-testid="link-demo">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </a>
              )}
              {project.links.video && (
                <a href={project.links.video} target="_blank" rel="noopener noreferrer" data-testid="anchor-video">
                  <Button variant="outline" data-testid="link-video">
                    <SiYoutube className="mr-2 h-4 w-4" />
                    Watch Video
                  </Button>
                </a>
              )}
            </div>
          </section>
        )}
      </article>
    </Layout>
  );
}
