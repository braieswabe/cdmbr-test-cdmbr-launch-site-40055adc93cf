"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, MessageCircleQuestion, ShieldCheck, Sparkles, TimerReset } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { CTABanner } from "@/components/CTABanner";
import { SectionHeading } from "@/components/SectionHeading";

type FaqItem = {
  question: string;
  answer: string;
};

const faqGroups: { id: string; title: string; description: string; items: FaqItem[] }[] = [
  {
    id: "general_questions",
    title: "General questions",
    description: "Quick answers about what we do, who we help, and how we work.",
    items: [
      {
        question: "What kind of businesses do you work with?",
        answer:
          "We work with founders, small teams, and growing companies that need a professional website to build trust, explain their offer clearly, and turn more visitors into leads.",
      },
      {
        question: "What makes your approach different?",
        answer:
          "We focus on clarity, credibility, and conversion. That means strong messaging, thoughtful structure, polished design, and a smooth user experience that helps people take the next step.",
      },
      {
        question: "Do you only build websites, or do you help with strategy too?",
        answer:
          "We help with both. Every project starts with a practical strategy conversation so the final site reflects your goals, audience, and sales process—not just a visual style.",
      },
    ],
  },
  {
    id: "service_questions",
    title: "Service questions",
    description: "Details about scope, process, timelines, and deliverables.",
    items: [
      {
        question: "What does a typical project include?",
        answer:
          "Most projects include discovery, messaging guidance, page planning, responsive design, development, basic SEO setup, and launch support. We tailor the scope to your needs so you only pay for what matters.",
      },
      {
        question: "How long does a project usually take?",
        answer:
          "Timelines vary by scope, but most standard websites are completed in 3 to 6 weeks. Larger builds with custom functionality or more pages may take longer, and we’ll always set expectations up front.",
      },
      {
        question: "Will I be able to update the site after launch?",
        answer:
          "Yes. We build with maintainability in mind and can hand off a site that’s easy to update. If you prefer, we can also provide ongoing support for content changes and improvements.",
      },
    ],
  },
  {
    id: "pricing_questions",
    title: "Pricing questions",
    description: "Straight answers about billing, contracts, and payment terms.",
    items: [
      {
        question: "How do you price projects?",
        answer:
          "Pricing is based on scope, complexity, and timeline. We offer transparent packages for common needs and custom quotes for larger or more specialized work.",
      },
      {
        question: "Do you require a deposit?",
        answer:
          "Yes. A deposit secures your project slot and allows us to begin planning and design. The remaining balance is typically split into milestone payments or due at launch, depending on the agreement.",
      },
      {
        question: "Do you offer refunds?",
        answer:
          "Because our work is custom and time-based, refunds are limited once work has started. We’re clear about scope before kickoff so there are no surprises, and we keep communication open throughout the project.",
      },
    ],
  },
  {
    id: "support_questions",
    title: "Support questions",
    description: "What happens after launch and how we stay in touch.",
    items: [
      {
        question: "What kind of support do you provide after launch?",
        answer:
          "We offer post-launch support for bug fixes, small adjustments, and guidance during the handoff period. Ongoing support plans are also available if you want a partner to keep improving the site over time.",
      },
      {
        question: "How do you communicate during the project?",
        answer:
          "We keep communication simple and predictable through email, scheduled check-ins, and shared project updates. You’ll always know what’s happening, what we need from you, and what comes next.",
      },
      {
        question: "Can you help with future updates or new pages?",
        answer:
          "Absolutely. Many clients come back for new landing pages, content updates, and conversion improvements after launch. We’re happy to support the site as your business grows.",
      },
    ],
  },
];

function FaqAccordionItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="rounded-2xl border border-border bg-card shadow-sm transition hover:shadow-md">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-foreground">{question}</span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen ? (
        <div className="px-5 pb-5 text-sm leading-6 text-muted-foreground">{answer}</div>
      ) : null}
    </div>
  );
}

export default function FaqPage() {
  const [openKey, setOpenKey] = useState<string>("general_questions-0");

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <section className="border-b border-border bg-gradient-to-b from-secondary/20 to-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
                <MessageCircleQuestion className="h-4 w-4 text-primary" />
                Answers that help you move forward with confidence
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Frequently asked questions, answered clearly
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                If you’re comparing options or planning a project, this page covers the most common
                questions about our process, pricing, support, and timelines.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[280px_minmax(0,1fr)]">
            <aside className="space-y-4">
              <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-lg font-semibold">Need a quick answer?</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  We’re happy to help if your question isn’t covered below.
                </p>
                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
                >
                  Contact us
                </Link>
              </div>
              <div className="rounded-3xl border border-border bg-muted/40 p-6">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <p className="font-semibold">Clear expectations</p>
                </div>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  We believe good projects start with honest answers, transparent scope, and simple
                  communication.
                </p>
              </div>
            </aside>

            <div className="space-y-10">
              {faqGroups.map((group) => (
                <section key={group.id} className="space-y-5">
                  <SectionHeading
                    eyebrow={group.title}
                    title={group.description}
                    description=""
                    className="max-w-none"
                  />
                  <div className="space-y-3">
                    {group.items.map((item, index) => {
                      const key = `${group.id}-${index}`;
                      const isOpen = openKey === key;
                      return (
                        <FaqAccordionItem
                          key={key}
                          question={item.question}
                          answer={item.answer}
                          isOpen={isOpen}
                          onToggle={() => setOpenKey(isOpen ? "" : key)}
                        />
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <CTABanner
              headline="Still have a question?"
              description="Send us a message and we’ll give you a straightforward answer, a realistic timeline, and the next best step."
              buttonLabel="Start a conversation"
              buttonHref="/contact"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}