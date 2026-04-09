import { cn } from "@/lib/utils";

export type StatItem = {
  label: string;
  value: string;
  detail?: string;
};

export type StatsRowProps = {
  stats: StatItem[];
  className?: string;
};

export function StatsRow({ stats, className }: StatsRowProps) {
  return (
    <section
      aria-label="Key statistics"
      className={cn(
        "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
        className,
      )}
    >
      {stats.map((stat) => (
        <div
          key={`${stat.label}-${stat.value}`}
          className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
        >
          <div className="text-3xl font-bold tracking-tight text-foreground">
            {stat.value}
          </div>
          <div className="mt-2 text-sm font-medium text-primary">
            {stat.label}
          </div>
          {stat.detail ? (
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {stat.detail}
            </p>
          ) : null}
        </div>
      ))}
    </section>
  );
}

export default StatsRow;
