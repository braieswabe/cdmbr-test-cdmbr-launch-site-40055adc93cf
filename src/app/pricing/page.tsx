"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, CreditCard, ShieldCheck, Sparkles, TimerReset } from "lucide-react";

import { CTABanner } from "@/components/CTABanner";
import { ComparisonTable } from "@/components/ComparisonTable";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PricingTable } from "@/components/PricingTable";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsRow } from "@/components/StatsRow";

const monthlyPlans = [
  {
    planName: "Starter",
    price: "$1,500",
    description: "For smaller projects that need a polished, professional website without unnecessary complexity.",
    features: ["Up to 5 pages", "Responsive design", "Basic SEO setup", "Launch support", "1 revision round"],
    ctaLabel: "Start Starter",
    ctaHref: "/contact",
  },
  {
    planName: "Growth",
    price: "$3,200",
    description: "Recommended for teams that want stronger messaging, more pages, and a conversion-focused experience.",
    features: [
      "Up to 10 pages",
      "Strategy workshop",
      "Conversion copy refinement",
      "SEO structure and metadata",
      "2 revision rounds",
    ],
    ctaLabel: "Choose Growth",
    ctaHref: "/contact",
    popular: true,
  },
  {
    planName: "Partner",
    price: "Custom",
    description: "For larger builds, ongoing support, or multi-phase work that needs a flexible scope.",
    features: ["Custom page count", "Integrations", "Monthly support", "Campaign landing pages", "Priority planning"],
    ctaLabel: "Talk to us",
    ctaHref: "/contact",
  },
];

const annualPlans = [
  {
    planName: "Starter",
    price: "$15,000",
    description: "Best for lean teams that want a strong launch and a predictable one-time investment.",
    features: ["Up to 5 pages", "Responsive design", "Basic SEO setup", "Launch support", "1 revision round"],
    ctaLabel: "Start Starter",
    ctaHref: "/contact",
  },
  {
    planName: "Growth",
    price: "$32,000",
    description: "Recommended for teams that want stronger messaging, more pages, and a conversion-focused experience.",
    features: [
      "Up to 10 pages",
      "Strategy workshop",
      "Conversion copy refinement",
      "SEO structure and metadata",
      "2 revision rounds",
    ],
    ctaLabel: "Choose Growth",
    ctaHref: "/contact",
    popular: true,
  },
  {
    planName: "Partner",
    price: "Custom",
    description: "For larger builds, ongoing support, or multi-phase work that needs a flexible scope.",
    features: ["Custom page count", "Integrations", "Monthly support", "Campaign landing pages", "Priority planning"],
    ctaLabel: "Talk to us",
    ctaHref: "/contact",
  },
];

const faqItems = [
  {
    question: "What’s included in the price?",
    answer:
      "Each plan includes strategy, design, development, testing, and launch support. The exact scope depends on the tier you choose.",
  },
  {
    question: "Do you offer payment plans?",
    answer:
      "Yes. We can split projects into milestone-based payments so budgeting stays manageable and predictable.",
  },
  {
    question: "Can you work with our existing brand?",
    answer:
      "Absolutely. We can build from your current brand system or help refine it if the website needs a stronger visual direction.",
  },
  {
    question: "What if we need extra pages or features?",
    answer:
      "We can add them as scoped upgrades or include them in a custom proposal if the project needs a broader build.",
  },
];

const comparisonPlans = [
  {
    name: "Starter",
    price: "$1,500",
    features: ["5 pages", "Responsive design", "Basic SEO", "Launch support"],
  },
  {
    name: "Growth",
    price: "$3,200",
    features: ["10 pages", "Strategy workshop", "Copy refinement", "SEO structure", "Priority revisions"],
  },
  {
    name: "Partner",
    price: "Custom",
    features: ["Custom scope", "Integrations", "Monthly support", "Campaign pages"],
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("monthly");

  const plans = useMemo(() => (billing === "monthly" ? monthlyPlans : annualPlans), [billing]);

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Pricing"
              title="Transparent pricing that makes it easy to choose the right fit."
              description="Clear scope, practical deliverables, and no surprises. Pick a plan that matches your goals, then we’ll tailor the details together."
            />
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setBilling("monthly")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  billing === "monthly"
                    ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg shadow-[var(--primary)]/20"
                    : "border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
                }`}
              >
                One-time project
              </button>
              <button
                type="button"
                onClick={() => setBilling("annual")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  billing === "annual"
                    ? "bg-[var(--primary)] text-[var(--primary-foreground)] shadow-lg shadow-[var(--primary)]/20"
                    : "border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)]"
                }`}
              >
                Annual support
              </button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-[var(--primary-foreground)] shadow-lg shadow-[var(--primary)]/20 transition hover:-translate-y-0.5 hover:opacity-95"
              >
                Request a quote
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-5 py-3 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
              >
                Compare services
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-xl shadow-black/5">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-[var(--muted)] p-5">
                <CreditCard className="h-6 w-6 text-[var(--primary)]" />
                <p className="mt-4 text-sm font-semibold">Predictable billing</p>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">Milestone-based payments and clear scope.</p>
              </div>
              <div className="rounded-2xl bg-[var(--muted)] p-5">
                <ShieldCheck className="h-6 w-6 text-[var(--primary)]" />
                <p className="mt-4 text-sm font-semibold">No hidden fees</p>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">You know what’s included before we start.</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl bg-gradient-to-br from-[var(--secondary)] to-[var(--primary)] p-6 text-[var(--primary-foreground)]">
              <p className="text-sm font-medium uppercase tracking-[0.2em]">Recommended choice</p>
              <p className="mt-3 text-lg font-semibold">Growth is the best fit for most teams that want a stronger website and a smoother buying journey.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <StatsRow
          stats={[
            { label: "Average project value", value: "$3.2k" },
            { label: "Typical timeline", value: "4-8 weeks" },
            { label: "Revision rounds", value: "1-2" },
            { label: "Support response", value: "Same day" },
          ]}
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Plans"
          title="Choose a package that matches your stage."
          description="Each plan is designed to reduce friction, keep the scope clear, and help you move forward with confidence."
        />
        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          {plans.map((plan) => (
            <PricingTable key={plan.planName} {...plan} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <SectionHeading
              eyebrow="Included"
              title="What’s covered in every project"
              description="We keep the process focused on the work that moves the needle, while making scope and limitations easy to understand."
            />
            <div className="mt-6 space-y-3">
              {[
                "Discovery and planning",
                "Responsive design",
                "Development and QA",
                "Launch support",
                "Clear handoff documentation",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl bg-[var(--muted)] px-4 py-3">
                  <Check className="h-4 w-4 text-[var(--primary)]" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <ComparisonTable
              title="Plan comparison"
              description="A quick view of what each option includes so you can choose the right level of support."
              plans={comparisonPlans}
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading
          eyebrow="Add-ons"
          title="Optional extras when you need more than the standard scope."
          description="Add the pieces that help your site go further without overcommitting to a larger package."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: "Extra pages", description: "Add landing pages, case studies, or campaign pages as needed." },
            { title: "Copywriting", description: "Refine messaging for stronger clarity, trust, and conversion." },
            { title: "Integrations", description: "Connect forms, analytics, CRM tools, or booking workflows." },
            { title: "Ongoing support", description: "Keep your site updated with monthly improvements and fixes." },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6">
              <p className="text-lg font-semibold">{item.title}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Common pricing questions, answered."
          description="If you’re comparing options, these answers should help you move forward without guesswork."
        />
        <div className="mt-10">
          <FAQAccordion items={faqItems} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <CTABanner
          headline="Ready for a clear, no-pressure quote?"
          description="Tell us what you need and we’ll recommend the right plan, timeline, and next step."
          buttonLabel="Book a call"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}