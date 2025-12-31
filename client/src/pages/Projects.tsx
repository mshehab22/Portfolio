import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProjectCard } from "@/components/ProjectCard";
import { getProjectsByCategory, type ProjectCategory } from "@/data/projects";

type FilterOption = "All" | ProjectCategory;

export default function Projects() {
  const [filter, setFilter] = useState<FilterOption>("All");
  
  const games = getProjectsByCategory("Game");
  const software = getProjectsByCategory("Software");
  
  const trilogyProjects = games.filter((p) => p.series === "Legends of Alden");
  const otherGameProjects = games.filter((p) => p.series !== "Legends of Alden");

  const filterOptions: FilterOption[] = ["All", "Game", "Software"];

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-projects-title">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mb-8">
            A collection of games and software I've built. Each project represents a unique challenge and learning experience.
          </p>
          
          <div className="flex gap-3" data-testid="filter-tabs">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-5 py-2.5 text-base font-medium rounded-full transition-colors ${
                  filter === option
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
                data-testid={`button-filter-${option.toLowerCase()}`}
              >
                {option === "Game" ? "Games" : option}
              </button>
            ))}
          </div>
        </header>

        {(filter === "All" || filter === "Game") && games.length > 0 && (
          <section className="py-12 md:py-16" data-testid="section-games">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title-games">
              Games
            </h2>
            <div className="h-px bg-border mb-12" />

            {trilogyProjects.length > 0 && (
              <div className="mb-16">
                <div className="text-center mb-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3" data-testid="text-subsection-trilogy">
                    Legends of Alden Trilogy
                  </h3>
                  <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-trilogy-description">
                    A long-term series of game projects where each entry builds on the last. I use the trilogy to iterate on gameplay systems, architecture, and design decisions over time.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {trilogyProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </div>
            )}

            {otherGameProjects.length > 0 && (
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-6" data-testid="text-subsection-other-games">
                  Other Games
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {otherGameProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </div>
              </div>
            )}
          </section>
        )}

        {(filter === "All" || filter === "Software") && software.length > 0 && (
          <>
            {filter === "All" && games.length > 0 && (
              <div className="border-t border-border" />
            )}
            <section className="py-12 md:py-16" data-testid="section-software">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-section-title-software">
                Software
              </h2>
              <div className="h-px bg-border mb-8" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {software.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </Layout>
  );
}
