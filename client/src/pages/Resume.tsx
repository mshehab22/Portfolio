import { Download, FileText } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Resume() {
  return (
    <Layout>
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-16 md:py-24">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="text-resume-title">
            Resume
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Download my resume to learn more about my experience, skills, and qualifications.
          </p>
        </header>

        <Card className="max-w-md">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <div className="mx-auto w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                <FileText className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground text-sm">
                Resume PDF will be available here once uploaded.
              </p>
            </div>
            
            <Button disabled className="w-full" data-testid="button-download-resume">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </Button>

            <p className="mt-4 text-xs text-muted-foreground">
              To add your resume, place a PDF file in the public folder and update this component.
            </p>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
