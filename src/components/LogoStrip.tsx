import Image from "next/image";
import { cn } from "@/lib/utils";

export type LogoItem = {
  name: string;
  src: string;
  alt?: string;
  width?: number;
  height?: number;
};

type LogoStripProps = {
  heading?: string;
  logos: LogoItem[];
  className?: string;
};

export function LogoStrip({
  heading = "Trusted by growing teams",
  logos,
  className,
}: LogoStripProps) {
  return (
    <section className={cn("w-full", className)} aria-labelledby="logo-strip-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] px-6 py-8 shadow-sm sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-sm">
              <h2
                id="logo-strip-heading"
                className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]"
              >
                {heading}
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                Recognized by teams that value reliable delivery, clear communication, and polished digital experiences.
              </p>
            </div>

            <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {logos.map((logo) => (
                <div
                  key={logo.name}
                  className="flex items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 transition-colors hover:border-[var(--primary)]"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt ?? logo.name}
                    width={logo.width ?? 120}
                    height={logo.height ?? 40}
                    className="h-8 w-auto object-contain opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoStrip;
