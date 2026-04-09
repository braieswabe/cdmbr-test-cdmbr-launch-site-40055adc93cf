import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type ProjectCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function ProjectCard({
  icon,
  title,
  description,
  className,
}: ProjectCardProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus-within:ring-2 focus-within:ring-primary/40",
        className,
      )}
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-foreground">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        {description}
      </p>
    </article>
  );
}

export default ProjectCard;
