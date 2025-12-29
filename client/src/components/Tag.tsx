interface TagProps {
  children: React.ReactNode;
  variant?: "default" | "category";
  "data-testid"?: string;
}

export function Tag({ children, variant = "default", "data-testid": testId }: TagProps) {
  if (variant === "category") {
    return (
      <span className="inline-flex items-center rounded-md bg-muted px-2.5 py-0.5 text-xs font-medium uppercase tracking-wide text-muted-foreground" data-testid={testId}>
        {children}
      </span>
    );
  }

  return (
    <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-mono text-accent-foreground" data-testid={testId}>
      {children}
    </span>
  );
}
