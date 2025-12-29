import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ProjectSection } from "@/components/ProjectSection";
import { Button } from "@/components/ui/button";
import { projects, getProjectsByCategory, type ProjectCategory } from "@/data/projects";

type FilterOption = "All" | ProjectCategory;

export default function Projects() {
  const [filter, setFilter] = useState<FilterOption>("All");
  
  const games = getProjectsByCategory("Game");
  const software = getProjectsByCategory("Software");

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
          
          <div className="flex gap-2" data-testid="filter-tabs">
            {filterOptions.map((option) => (
              <Button
                key={option}
                variant={filter === option ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter(option)}
                data-testid={`button-filter-${option.toLowerCase()}`}
                className={filter === option ? "" : ""}
              >
                {option === "Game" ? "Games" : option}
              </Button>
            ))}
          </div>
        </header>

        {(filter === "All" || filter === "Game") && games.length > 0 && (
          <ProjectSection title="Games" projects={games} />
        )}

        {(filter === "All" || filter === "Software") && software.length > 0 && (
          <>
            {filter === "All" && games.length > 0 && (
              <div className="border-t border-border" />
            )}
            <ProjectSection title="Software" projects={software} />
          </>
        )}
      </div>
    </Layout>
  );
}
