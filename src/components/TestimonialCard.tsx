import { cn } from "@/lib/utils";

type TestimonialCardProps = {
  icon: string;
  title: string;
  description: string;
  className?: string;
};

export function TestimonialCard({
  icon,
  title,
  description,
  className,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-lg font-semibold text-white shadow-md transition-transform duration-300 group-hover:scale-105">
        {icon}
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-[var(--card-foreground)]">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">
        {description}
      </p>
    </article>
  );
}

export default TestimonialCard;
