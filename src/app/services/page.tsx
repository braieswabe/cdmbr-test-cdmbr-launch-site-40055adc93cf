import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
  description: "Learn more about services",
};

import Link from "next/link";
import { ArrowRight, BarChart3, Briefcase, Code2, LayoutGrid, Search, ShieldCheck, Sparkles, Workflow } from "lucide-react";

import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingTable } from "@/components/PricingTable";
import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { StatsRow } from "@/components/StatsRow";

const services = [
  {
    icon: <LayoutGrid className="h-6 w-6" />,
    number: "01",
    title: "Brand & website strategy",
    description:
      "Clarify your message, sharpen your positioning, and map the pages and content your audience needs to take action.",
  },
  {
    icon: <Code2 className="h-6 w-6" />,
    number: "02",
    title: "Next.js website builds",
    description:
      "Launch fast, accessible, SEO-ready websites with a polished design system and clean implementation.",
  },
  {
    icon: <Search className="h-6 w-6" />,
    number: "03",
    title: "SEO content and structure",
    description:
      "Improve discoverability with page structure, keyword-focused copy, and conversion-friendly content hierarchy.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    number: "04",
    title: "Conversion optimization",
    description:
      "Remove friction across key pages with stronger calls to action, better proof points, and clearer user paths.",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    number: "05",
    title: "Ongoing website support",
    description:
      "Keep your site current with updates, landing pages, performance checks, and reliable monthly support.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    number: "06",
    title: "Maintenance and reliability",
    description:
      "Protect uptime and user trust with proactive monitoring, fixes, and careful release management.",
  },
];

const processSteps = [
  {
    title: "Discovery",
    description:
      "We review your goals, audience, current site, and competitors to identify the fastest path to better results.",
  },
  {
    title: "Recommendation",
    description:
      "You get a clear plan with scope, priorities, timeline, and the service mix that fits your stage and budget.",
  },
  {
    title: "Design and build",
    description:
      "We create the pages, content, and interactions with a focus on clarity, speed, and conversion.",
  },
  {
    title: "Review and launch",
    description:
      "We refine the details, test across devices, and launch with confidence so your team can move forward quickly.",
  },
];

const useCases = [
  {
    title: "Startups preparing to launch",
    description:
      "Get a credible website that explains the product clearly, supports fundraising, and helps early users convert.",
  },
  {
    title: "Service businesses growing demand",
    description:
      "Turn your expertise into a site that builds trust, answers objections, and generates qualified inquiries.",
  },
  {
    title: "Teams refreshing an outdated site",
    description:
      "Modernize the experience, improve performance, and align the website with your current brand and goals.",
  },
];

const comparisonPlans = [
  {
    planName: "Starter",
    price: "$4,500",
    description: "Best for focused launches and smaller websites that need a strong, professional foundation.",
    features: [
      "Strategy workshop and sitemap",
      "Up to 5 custom pages",
      "Responsive design system",
      "Basic SEO setup",
      "Launch support",
    ],
    ctaLabel: "Request Starter",
    ctaHref: "/contact",
  },
  {
    planName: "Growth",
    price: "$8,500",
    description: "Recommended for teams that want stronger messaging, more pages, and conversion-focused structure.",
    features: [
      "Everything in Starter",
      "Up to 10 custom pages",
      "Conversion copy refinement",
      "Advanced SEO structure",
      "Priority revisions",
    ],
    ctaLabel: "Request Growth",
    ctaHref: "/contact",
    popular: true,
  },
  {
    planName: "Partner",
    price: "Custom",
    description: "For ongoing support, larger builds, or multi-phase work that needs a flexible engagement.",
    features: [
      "Everything in Growth",
      "Custom integrations",
      "Monthly support retainer",
      "Landing pages and campaigns",
      "Dedicated planning sessions",
    ],
    ctaLabel: "Talk to us",
    ctaHref: "/contact",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Services"
              title="Everything you need to launch, improve, and grow a high-performing website."
              description="We combine strategy, design, development, and content so your site looks polished, loads quickly, and helps people take the next step."
            />
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-[var(--primary-foreground)] shadow-lg shadow-[var(--primary)]/20 transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Request a consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                View pricing
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-xl shadow-black/5">
            <div className="grid gap-4 sm:grid-cols-2">
              <FeatureCard icon={<Sparkles className="h-6 w-6" />} number="Fast" title="Quick turnaround" description="Clear milestones and efficient delivery." />
              <FeatureCard icon={<ShieldCheck className="h-6 w-6" />} number="Trusted" title="Reliable process" description="Structured communication from start to finish." />
            </div>
            <div className="mt-6 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] p-6 text-[var(--primary-foreground)]">
              <p className="text-sm font-medium uppercase tracking-[0.2em]">What clients value most</p>
              <p className="mt-3 text-lg font-semibold">A clear plan, a polished result, and a website that supports real business goals.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <StatsRow
          stats={[
            { label: "Projects delivered", value: "120+" },
            { label: "Average launch time", value: "4-8 weeks" },
            { label: "Client satisfaction", value: "98%" },
            { label: "Support response", value: "Same day" },
          ]}
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Service offering"
          title="Choose the right mix of strategy, design, and execution."
          description="Every engagement is tailored to your goals. Start with one service or combine several for a complete website experience."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Process"
          title="A simple process that keeps projects moving."
          description="You always know what happens next, what we need from you, and how each step supports the final outcome."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, index) => (
            <div key={step.title} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--primary)] text-lg font-bold text-[var(--primary-foreground)]">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              eyebrow="Best fit"
              title="Services built for teams that need clarity and momentum."
              description="Whether you're launching, repositioning, or improving an existing site, we focus on practical outcomes and measurable progress."
            />
            <div className="mt-8 space-y-4">
              {useCases.map((item) => (
                <div key={item.title} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <PricingTable {...comparisonPlans[1]} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <CTABanner
          headline="Need help choosing the right service?"
          description="Tell us what you're building, what’s not working, and where you want to go. We’ll recommend the best next step."
          buttonLabel="Contact us"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}