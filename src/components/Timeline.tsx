import { cn } from "@/lib/utils";

export type TimelineItem = {
  title: string;
  description: string;
  date?: string;
  highlight?: string;
};

export type TimelineProps = {
  items: TimelineItem[];
  className?: string;
};

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn("relative space-y-6", className)}>
      {items.map((item, index) => (
        <li key={`${item.title}-${index}`} className="relative pl-8">
          <span
            aria-hidden="true"
            className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-background bg-primary shadow-sm"
          />
          {index !== items.length - 1 ? (
            <span
              aria-hidden="true"
              className="absolute left-[7px] top-5 h-full w-px bg-border"
            />
          ) : null}

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-base font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              {item.date ? (
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {item.date}
                </span>
              ) : null}
            </div>

            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>

            {item.highlight ? (
              <p className="mt-4 border-l-2 border-secondary pl-4 text-sm font-medium text-foreground">
                {item.highlight}
              </p>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Timeline;
