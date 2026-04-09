import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export type SocialLink = {
  label: string;
  href: string;
  icon?: "facebook" | "instagram" | "linkedin" | "twitter" | "youtube";
};

export type SocialLinksProps = {
  links: SocialLink[];
  className?: string;
  variant?: "icons" | "buttons";
};

const iconMap = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
} as const;

export function SocialLinks({
  links,
  className = "",
  variant = "icons",
}: SocialLinksProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`.trim()}>
      {links.map((link) => {
        const Icon = link.icon ? iconMap[link.icon] : Linkedin;

        return (
          <a
            key={`${link.label}-${link.href}`}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={link.label}
            className={
              variant === "buttons"
                ? "inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--foreground)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
                : "inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary)] hover:text-[var(--primary)] hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
            }
          >
            <Icon className="h-5 w-5" aria-hidden="true" />
            {variant === "buttons" ? <span>{link.label}</span> : null}
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
