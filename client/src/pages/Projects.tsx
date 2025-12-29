import { Layout } from "@/components/layout/Layout";
import { ProjectSection } from "@/components/ProjectSection";
import { getProjectsByCategory } from "@/data/projects";

export default function Projects() {
  const games = getProjectsByCategory("Game");
  const software = getProjectsByCategory("Software");

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-projects-title">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A collection of games and software I've built. Each project represents a unique challenge and learning experience.
          </p>
        </header>

        {games.length > 0 && (
          <ProjectSection title="Games" projects={games} />
        )}

        {software.length > 0 && (
          <>
            <div className="border-t border-border" />
            <ProjectSection title="Software" projects={software} />
          </>
        )}
      </div>
    </Layout>
  );
}
