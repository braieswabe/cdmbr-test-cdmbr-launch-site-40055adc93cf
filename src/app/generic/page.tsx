import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A polished starting point for pages that need to do more than one job",
  description: "Learn more about a polished starting point for pages that need to do more than one job",
};

import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, ShieldCheck, Sparkles } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";

export default function GenericPage() {
  const highlights = [
    "Clear, conversion-focused messaging",
    "Flexible layout for mixed content",
    "Built for internal pages and custom campaigns",
    "Responsive design with strong visual hierarchy",
  ];

  const details = [
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Structured for clarity",
      description:
        "Use this page as a dependable template for utility content, custom landing pages, or one-off campaigns that still need a polished presentation.",
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Trust-first presentation",
      description:
        "Every section is designed to support credibility with concise copy, readable spacing, and clear next steps that reduce friction.",
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: "Easy to adapt",
      description:
        "Swap in your own messaging, supporting media, or feature blocks without changing the overall structure or visual consistency.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <section className="border-b border-border/60 bg-gradient-to-b from-primary/10 via-background to-background">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Page" }]} />
          </div>
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-24">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                <CheckCircle2 className="h-4 w-4" />
                Flexible page template
              </span>
              <div className="space-y-4">
                <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                  A polished starting point for pages that need to do more than one job
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
                  This generic page is built for utility content, custom campaigns, and internal
                  experiences that still deserve a premium, conversion-ready layout.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  Talk to our team
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold transition hover:border-primary/30 hover:bg-muted/40"
                >
                  Explore services
                </Link>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary" />
                    <span className="text-sm leading-6 text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="space-y-4">
                <p className="text-sm font-medium text-muted-foreground">What this page can support</p>
                <div className="space-y-4">
                  {details.map((item) => (
                    <div key={item.title} className="rounded-2xl bg-muted/40 p-4">
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        {item.icon}
                      </div>
                      <h2 className="text-base font-semibold">{item.title}</h2>
                      <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Content body"
            title="Use this layout for clear, useful information"
            description="The structure keeps the message easy to scan while leaving room for supporting details, links, or media."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
              <h2 className="text-2xl font-semibold">Built for practical communication</h2>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                Whether you are publishing a policy update, a resource hub, a campaign landing
                page, or a custom internal brief, this page keeps the experience professional and
                easy to navigate. The layout emphasizes the most important message first, then
                supports it with structured content blocks that are simple to replace.
              </p>
              <p className="mt-4 max-w-3xl text-base leading-7 text-muted-foreground">
                It is especially useful when you need a page that feels complete without requiring
                a custom design system for every new use case. The result is faster publishing,
                consistent presentation, and a better experience for visitors.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-muted/30 p-6">
              <h3 className="text-lg font-semibold">Quick actions</h3>
              <div className="mt-4 space-y-3">
                <Link
                  href="/faq"
                  className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium transition hover:border-primary/30 hover:bg-muted/40"
                >
                  Review common questions
                  <ArrowRight className="h-4 w-4 text-primary" />
                </Link>
                <Link
                  href="/portfolio"
                  className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium transition hover:border-primary/30 hover:bg-muted/40"
                >
                  See recent work
                  <ArrowRight className="h-4 w-4 text-primary" />
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center justify-between rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium transition hover:border-primary/30 hover:bg-muted/40"
                >
                  Start a conversation
                  <ArrowRight className="h-4 w-4 text-primary" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-muted/20">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Supporting section"
              title="A dependable format for related details"
              description="Use this area for proof points, related links, process notes, or any context that helps the page feel complete."
            />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Keep the message focused",
                  text: "Lead with one clear outcome, then add supporting information only where it helps the reader move forward.",
                },
                {
                  title: "Make the next step obvious",
                  text: "Every section should point toward a simple action, whether that is contacting your team, reading more, or exploring a service.",
                },
                {
                  title: "Stay consistent across pages",
                  text: "A repeatable structure helps your site feel cohesive, credible, and easier to maintain over time.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner
          headline="Need a custom page built around a specific goal?"
          description="We can adapt this structure for launches, resources, internal tools, or any page that needs to look sharp and convert well."
          buttonLabel="Contact us"
          buttonHref="/contact"
        />
      </main>
      <Footer />
    </div>
  );
}