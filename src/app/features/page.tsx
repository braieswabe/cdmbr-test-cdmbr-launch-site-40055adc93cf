import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Blocks, CheckCircle2, Gauge, Layers3, PlugZap, ShieldCheck, Sparkles } from "lucide-react";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FeatureCard } from "@/components/FeatureCard";
import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsRow } from "@/components/StatsRow";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Explore the capabilities that help teams launch faster, communicate clearly, and convert more visitors into customers.",
};

const featureHighlights = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    number: "01",
    title: "Clear messaging system",
    description:
      "Structure your value proposition so visitors understand what you do, who it is for, and why it matters in seconds.",
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    number: "02",
    title: "Conversion-focused layouts",
    description:
      "Use proven page sections, strong hierarchy, and direct calls to action to guide people toward the next step.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    number: "03",
    title: "Trust-building content",
    description:
      "Present testimonials, proof points, and transparent details that reduce hesitation and support confident decisions.",
  },
];

const stats = [
  { label: "Faster launch cycles", value: "2x" },
  { label: "Higher inquiry quality", value: "38%" },
  { label: "Average page depth", value: "5 sections" },
  { label: "Reusable components", value: "20+" },
];

const plans = [
  {
    name: "Manual approach",
    price: "$0",
    description: "Patch together pages with inconsistent messaging and limited structure.",
    features: ["Hard to maintain", "Slow to update", "Weak conversion flow"],
  },
  {
    name: "Template-only setup",
    price: "$49",
    description: "A visual start, but often missing the strategy and content needed to convert.",
    features: ["Generic copy", "Limited flexibility", "Minimal trust signals"],
  },
  {
    name: "Professional system",
    price: "$149",
    description: "A polished, conversion-oriented experience built to communicate value clearly.",
    features: ["Strategic layout", "Reusable sections", "Strong CTA flow"],
  },
];

const integrations = [
  "Analytics and event tracking",
  "CRM and lead routing",
  "Email marketing workflows",
  "Scheduling and booking tools",
  "Content publishing systems",
  "Design handoff and collaboration",
];

export default function FeaturesPage() {
  return (
    <main className="bg-background text-foreground">
      <Hero
        title="Features that make your website easier to trust, easier to use, and easier to choose."
        subtitle="Everything is designed to help visitors understand your offer quickly, compare options confidently, and take action without friction."
        ctaLabel="Book a consultation"
        ctaHref="/contact"
        secondaryLabel="See pricing"
        secondaryHref="/pricing"
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <LogoStrip
          heading="Built for teams that value clarity"
          logos={["Fast setup", "Easy editing", "Responsive by default", "Accessible patterns", "SEO-friendly structure"]}
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Overview"
          title="Core capabilities that support better outcomes"
          description="The platform combines strategy, structure, and presentation so your website works harder for your business."
          className="mb-8"
        />
        <StatsRow stats={stats} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {featureHighlights.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              number={feature.number}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <section className="bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Why it works"
            title="Designed to replace guesswork with a repeatable system"
            description="Instead of starting from scratch on every page, you get a structure that keeps content consistent and easy to scan."
            className="mb-8"
          />
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-primary">
                <Blocks className="h-4 w-4" />
                Feature blocks
              </div>
              <ul className="space-y-4 text-sm leading-7 text-muted-foreground">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  Modular sections make it simple to explain services, outcomes, and next steps.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  Consistent spacing and hierarchy improve readability across desktop and mobile.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  Clear calls to action keep the journey focused and low-friction.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold text-primary">
                <PlugZap className="h-4 w-4" />
                Integration highlights
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {integrations.map((item) => (
                  <div key={item} className="rounded-2xl border border-border bg-background px-4 py-3 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ComparisonTable
          title="Compare your options"
          description="See how a structured, professional website compares with manual setups and generic templates."
          plans={plans}
        />
      </section>

      <section className="border-t border-border bg-gradient-to-b from-background to-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                  <BarChart3 className="h-4 w-4" />
                  Ready to explore the full experience?
                </div>
                <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                  See how these features can support your next launch.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground">
                  If you want a website that feels polished, performs well, and is easy for your team to manage,
                  we can help you choose the right setup.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold transition hover:border-primary/40 hover:bg-secondary/40"
                >
                  View examples
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}