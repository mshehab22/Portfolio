import type { ProjectStatus } from "@/data/projects";

interface StatusIndicatorProps {
  status: ProjectStatus | string;
  "data-testid"?: string;
}

const statusColors: Record<string, string> = {
  "Ongoing": "bg-blue-500",
  "In Progress": "bg-yellow-500",
  "Completed": "bg-green-500",
};

export function StatusIndicator({ status, "data-testid": testId }: StatusIndicatorProps) {
  const colorClass = statusColors[status] || "bg-gray-500";

  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground" data-testid={testId}>
      <span className={`h-2 w-2 rounded-full ${colorClass}`} />
      {status}
    </span>
  );
}
