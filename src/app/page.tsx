import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App",
  description: "Learn more about app",
};

import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { FeatureCard } from "@/components/FeatureCard";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";
import { StatsRow } from "@/components/StatsRow";
import { TestimonialCard } from "@/components/TestimonialCard";

const logos = [
  "Northstar Health",
  "Summit Finance",
  "Brightline Studio",
  "Atlas Retail",
  "Harbor Labs",
  "Vertex Partners",
];

const features = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    number: "01",
    title: "Clear strategy, not guesswork",
    description:
      "We turn scattered ideas into a focused plan that aligns your message, your offer, and your next best action.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    number: "02",
    title: "Reliable delivery",
    description:
      "Every project is managed with tight communication, realistic timelines, and a process built to reduce friction.",
  },
  {
    icon: <BarChart3 className="h-5 w-5" />,
    number: "03",
    title: "Measurable outcomes",
    description:
      "We design for clarity and conversion so your website works harder for leads, trust, and long-term growth.",
  },
  {
    icon: <Clock3 className="h-5 w-5" />,
    number: "04",
    title: "Fast, low-stress launch",
    description:
      "From kickoff to handoff, we keep momentum high and make it easy to move from idea to live site.",
  },
];

const stats = [
  { value: "120+", label: "projects launched" },
  { value: "98%", label: "client satisfaction" },
  { value: "3.2x", label: "average conversion lift" },
  { value: "24h", label: "typical response time" },
];

const testimonials = [
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "A website that finally feels credible",
    description:
      "We went from a generic brochure site to a polished experience that clearly explains what we do and why it matters. Leads improved within the first month.",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "Simple process, strong communication",
    description:
      "The team kept everything organized, explained decisions in plain language, and delivered exactly what we needed without unnecessary complexity.",
  },
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "Better clarity across the board",
    description:
      "Our homepage now tells a sharper story, our services are easier to understand, and prospects come in already more confident about working with us.",
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_35%),linear-gradient(to_bottom,_#ffffff,_#f8fafc_55%,_#eef2ff)] text-foreground">
      <NavBar />
      <main>
        <Hero
          title="Professional websites that build trust and turn interest into action."
          subtitle="We design and build modern digital experiences for teams that want a clearer message, stronger credibility, and more qualified inquiries."
          ctaLabel="Start a project"
          ctaHref="/contact"
          secondaryLabel="View services"
          secondaryHref="/services"
        />

        <section className="mx-auto max-w-7xl px-6 py-10 sm:py-14 lg:px-8">
          <LogoStrip heading="Trusted by teams that value clarity and results" logos={logos} />
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="What we do"
            title="Everything you need to launch with confidence"
            description="From strategy to launch, we focus on the essentials that help visitors understand your value quickly and take the next step."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="How it works"
            title="A straightforward process that keeps momentum high"
            description="We keep the journey simple so you always know what happens next."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                step: "1",
                title: "Discover",
                text: "We learn about your goals, audience, and current challenges so the work starts with the right priorities.",
              },
              {
                step: "2",
                title: "Design and build",
                text: "We create a clean, responsive experience with strong messaging, clear calls to action, and polished visuals.",
              },
              {
                step: "3",
                title: "Launch and improve",
                text: "We test the details, launch with confidence, and leave you with a site that is easy to maintain and grow.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <StatsRow stats={stats} />
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Client feedback"
            title="Proof that clarity creates confidence"
            description="Real outcomes from teams that needed a more professional presence and a smoother path to conversion."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.title} {...testimonial} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <CTABanner
            headline="Ready for a website that feels as professional as your business?"
            description="Let’s create a clear, credible experience that helps the right people understand your value and take action."
            buttonLabel="Book a discovery call"
            buttonHref="/contact"
          />
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 rounded-3xl border border-border bg-card px-6 py-6 shadow-sm sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Explore more</p>
              <p className="mt-2 text-lg font-semibold">See our services, pricing, and recent work.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground transition hover:opacity-90"
              >
                View portfolio <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold transition hover:bg-muted"
              >
                See pricing
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}