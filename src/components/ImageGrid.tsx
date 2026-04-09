import Image from "next/image";

export type ImageGridItem = {
  src: string;
  alt: string;
  title: string;
  description?: string;
  width?: number;
  height?: number;
};

export type ImageGridProps = {
  heading?: string;
  subheading?: string;
  items: ImageGridItem[];
  columns?: 2 | 3 | 4;
  className?: string;
};

const columnClasses: Record<NonNullable<ImageGridProps["columns"]>, string> = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

export function ImageGrid({
  heading,
  subheading,
  items,
  columns = 3,
  className = "",
}: ImageGridProps) {
  return (
    <section className={`w-full ${className}`.trim()}>
      {(heading || subheading) && (
        <div className="mb-8 max-w-2xl">
          {heading ? (
            <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
              {heading}
            </h2>
          ) : null}
          {subheading ? (
            <p className="mt-3 text-base leading-7 text-[var(--muted-foreground)]">
              {subheading}
            </p>
          ) : null}
        </div>
      )}

      <div className={`grid grid-cols-1 gap-5 ${columnClasses[columns]}`}>
        {items.map((item) => (
          <figure
            key={`${item.src}-${item.title}`}
            className="group overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--muted)]">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>

            <figcaption className="space-y-2 p-5">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">
                {item.title}
              </h3>
              {item.description ? (
                <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                  {item.description}
                </p>
              ) : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default ImageGrid;
