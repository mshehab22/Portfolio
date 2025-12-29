import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ProjectSection } from "@/components/ProjectSection";
import { profile } from "@/data/profile";
import { getProjectsByCategory } from "@/data/projects";

export default function Home() {
  const games = getProjectsByCategory("Game").slice(0, 2);
  const software = getProjectsByCategory("Software").slice(0, 2);

  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-hero-name">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl font-medium text-muted-foreground mb-4" data-testid="text-hero-headline">
              {profile.headline}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8" data-testid="text-hero-subtitle">
              {profile.subtitle}
            </p>
            <Link href="/projects" data-testid="nav-cta-projects">
              <Button size="lg" data-testid="button-view-projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          {games.length > 0 && (
            <ProjectSection title="Games" projects={games} />
          )}
          
          {software.length > 0 && (
            <>
              <div className="border-t border-border" />
              <ProjectSection title="Software" projects={software} />
            </>
          )}

          <div className="py-12 md:py-16 text-center">
            <Link href="/projects" data-testid="nav-see-all-projects">
              <Button variant="outline" size="lg" data-testid="button-see-all-projects">
                See All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
