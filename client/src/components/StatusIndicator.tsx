interface StatusIndicatorProps {
  status: string;
  "data-testid"?: string;
}

const statusColors: Record<string, string> = {
  "Released": "bg-green-500",
  "Production": "bg-green-500",
  "In Development": "bg-yellow-500",
  "Prototype": "bg-blue-500",
  "Game Jam Winner": "bg-purple-500",
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
