import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { profile } from "@/data/profile";

export default function Contact() {
  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            Contact
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Feel free to reach out. I'm always open to discussing new projects, opportunities, or just having a chat.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href={`mailto:${profile.email}`}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-email"
              >
                {profile.email}
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <SiGithub className="h-5 w-5 text-muted-foreground" />
                GitHub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-contact-github"
              >
                View Profile
              </a>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center gap-2">
                <SiLinkedin className="h-5 w-5 text-muted-foreground" />
                LinkedIn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a 
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="link-contact-linkedin"
              >
                Connect with Me
              </a>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 max-w-3xl">
          <p className="text-muted-foreground text-sm">
            Prefer email? Send me a message directly:
          </p>
          <div className="mt-4">
            <a href={`mailto:${profile.email}`}>
              <Button data-testid="button-send-email">
                <Mail className="mr-2 h-4 w-4" />
                Send Email
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
