import { SiGithub, SiLinkedin } from "react-icons/si";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6 md:px-8 flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
            data-testid="link-footer-github"
          >
            <SiGithub className="h-5 w-5" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
            data-testid="link-footer-linkedin"
          >
            <SiLinkedin className="h-5 w-5" />
          </a>
        </div>
        <p className="text-sm text-muted-foreground">
          {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
