import { Layout } from "@/components/layout/Layout";
import { profile } from "@/data/profile";

export default function About() {
  const paragraphs = profile.aboutText.split("\n\n");

  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-about-title">
            About
          </h1>
        </header>

        <div className="max-w-3xl">
          {paragraphs.map((paragraph, index) => (
            <p 
              key={index} 
              className="text-muted-foreground leading-relaxed mb-6 last:mb-0"
              data-testid={`text-about-paragraph-${index}`}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </Layout>
  );
}
