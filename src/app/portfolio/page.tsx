import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Building2, CheckCircle2, Filter, Gauge, Layers3, LineChart, Sparkles, Target, TrendingUp } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsRow } from "@/components/StatsRow";

export const metadata: Metadata = {
  title: "Portfolio | Professional Web Design & Development",
  description: "Explore selected projects that show measurable results, thoughtful design, and reliable delivery across industries.",
};

const projectFilters = ["All work", "SaaS", "Professional services", "Ecommerce", "Brand refresh", "Lead generation"];

const projects = [
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "B2B SaaS launch that turned interest into demos",
    description:
      "A focused product story, clearer pricing path, and faster page experience helped a software startup increase qualified demo requests within the first month.",
    tags: ["SaaS", "Conversion", "Launch"],
    metric: "+42% demo requests",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    title: "Service firm website rebuilt for stronger lead quality",
    description:
      "We simplified the navigation, clarified service positioning, and added proof points that helped the team attract better-fit inquiries.",
    tags: ["Professional services", "Lead gen", "UX"],
    metric: "31% more qualified leads",
  },
  {
    icon: <Layers3 className="h-5 w-5" />,
    title: "Multi-location brand system with consistent local pages",
    description:
      "A scalable design system made it easy to launch location pages that felt cohesive while still supporting local search intent.",
    tags: ["Brand system", "SEO", "Multi-location"],
    metric: "18 new pages in 6 weeks",
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: "Performance-first redesign for a high-traffic marketing site",
    description:
      "We improved structure, reduced visual clutter, and optimized assets to create a faster experience without sacrificing polish.",
    tags: ["Performance", "Redesign", "Accessibility"],
    metric: "2.1s faster load time",
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: "Conversion-focused landing page for a paid campaign",
    description:
      "A sharper offer, stronger social proof, and a single clear call to action helped the campaign outperform the previous version.",
    tags: ["Landing page", "Paid media", "CRO"],
    metric: "+27% conversion rate",
  },
  {
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    title: "Professional portfolio site for a growing consultancy",
    description:
      "We created a polished, credibility-led site that made expertise easier to understand and helped the team win larger engagements.",
    tags: ["Consulting", "Portfolio", "Trust"],
    metric: "3x more inbound inquiries",
  },
];

const highlights = [
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "Clear scope, clear outcomes",
    description: "Every project starts with a measurable goal so the final site supports the business, not just the brand.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Crafted for credibility",
    description: "We use strong hierarchy, refined spacing, and proof-driven messaging to make expertise feel immediate.",
  },
  {
    icon: <LineChart className="h-5 w-5" />,
    title: "Built to improve over time",
    description: "The structure supports SEO, content growth, and future expansion without requiring a rebuild.",
  },
];

const stats = [
  { label: "Average lift in qualified leads", value: "34%" },
  { label: "Projects delivered on schedule", value: "100%" },
  { label: "Typical launch timeline", value: "4–8 weeks" },
  { label: "Client retention rate", value: "92%" },
];

export default function PortfolioPage() {
  return (
    <main className="bg-background text-foreground">
      <NavBar />
      <section className="border-b border-border/60 bg-gradient-to-b from-secondary/20 to-background">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Filter className="h-4 w-4" />
              Selected work
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Real projects, measurable outcomes, and design that earns trust.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              Browse a curated set of launches, redesigns, and growth-focused builds. Each project is designed to
              improve clarity, strengthen credibility, and move users toward action.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Start a similar project
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold transition hover:border-primary/30 hover:bg-secondary/40"
              >
                Explore services
              </Link>
            </div>
          </div>
          <div className="grid gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-secondary/40 p-4">
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-border/70 bg-background p-5">
              <p className="text-sm font-medium text-primary">What clients value most</p>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">
                Clear communication, thoughtful strategy, and a final product that feels polished from the first click.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Project filters"
          title="Find examples by focus area."
          description="Use these categories to scan for the kind of work most relevant to your goals."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {projectFilters.map((filter, index) => (
            <button
              key={filter}
              type="button"
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                index === 0
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "border border-border bg-background text-foreground hover:border-primary/30 hover:bg-secondary/40"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured projects"
          title="A portfolio built around clarity, craft, and conversion."
          description="Each card highlights the challenge, the approach, and the result so you can quickly assess fit."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/10 opacity-0 transition group-hover:opacity-100" />
              <div className="relative aspect-[4/3] bg-gradient-to-br from-secondary/40 via-background to-primary/10 p-6">
                <div className="flex h-full items-start justify-between">
                  <div className="rounded-2xl bg-background/90 p-3 shadow-sm ring-1 ring-border">
                    {project.icon}
                  </div>
                  <span className="rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm ring-1 ring-border">
                    {project.metric}
                  </span>
                </div>
                <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-background/95 p-4 opacity-0 shadow-lg ring-1 ring-border transition group-hover:opacity-100">
                  <p className="text-sm font-medium text-primary">Hover detail</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Strategy, design, and development aligned to one measurable outcome.
                  </p>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary/60 px-3 py-1 text-xs font-medium text-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold tracking-tight">{project.title}</h2>
                <p className="text-sm leading-7 text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case study highlights"
            title="The work behind the results."
            description="A few snapshots of how we approach projects from discovery through launch."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {highlights.map((item) => (
              <ProjectCard key={item.title} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <StatsRow stats={stats} />
      </section>

      <CTABanner
        headline="Have a project in mind?"
        description="If you need a site that looks sharp, explains your value clearly, and supports growth, let’s talk."
        buttonLabel="Book a discovery call"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}