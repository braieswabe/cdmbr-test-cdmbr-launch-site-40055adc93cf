import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Building2, CheckCircle2, PlayCircle, Quote, Star, Users } from "lucide-react";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { LogoStrip } from "@/components/LogoStrip";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";
import { TestimonialCard } from "@/components/TestimonialCard";

export const metadata: Metadata = {
  title: "Testimonials | Client Reviews & Results",
  description: "Read what clients say about the process, communication, and outcomes delivered across projects.",
};

const testimonials = [
  {
    icon: <Quote className="h-5 w-5" />,
    title: "Clear process, strong communication, and a site that finally feels credible.",
    description:
      "We came in with a messy message and left with a website that makes our value obvious. The team was organized, responsive, and focused on outcomes the whole way through.",
    author: "Maya Chen, Founder at Northstar Advisory",
    rating: 5,
  },
  {
    icon: <Quote className="h-5 w-5" />,
    title: "Our lead quality improved almost immediately after launch.",
    description:
      "The new structure helped prospects understand what we do faster, and the inquiries we receive now are much better aligned with our services.",
    author: "Daniel Ortiz, Managing Director at Crestline Studio",
    rating: 5,
  },
  {
    icon: <Quote className="h-5 w-5" />,
    title: "A polished redesign that still feels easy to manage internally.",
    description:
      "We needed something premium but practical. The final site is easy for our team to update and has already reduced the number of repetitive sales questions.",
    author: "Priya Nair, Operations Lead at Harbor & Co.",
    rating: 5,
  },
  {
    icon: <Quote className="h-5 w-5" />,
    title: "They turned a vague idea into a site with real momentum.",
    description:
      "The messaging, layout, and proof points all work together now. It feels like a proper sales asset instead of just a brochure site.",
    author: "Ethan Brooks, CEO at Brightline Health",
    rating: 5,
  },
  {
    icon: <Quote className="h-5 w-5" />,
    title: "Fast, thoughtful, and detail-oriented from kickoff to launch.",
    description:
      "Every decision had a reason behind it. That level of clarity made the project easy to trust and the final result easy to approve.",
    author: "Sofia Alvarez, Marketing Director at Lumen Partners",
    rating: 5,
  },
  {
    icon: <Quote className="h-5 w-5" />,
    title: "The site now supports both credibility and conversion.",
    description:
      "We wanted a better first impression and a clearer path to contact. The new experience does both, and the difference is visible in our pipeline.",
    author: "Jordan Patel, Principal at Summit Legal Group",
    rating: 5,
  },
];

const clientLogos = ["Northstar", "Crestline", "Harbor & Co.", "Brightline", "Lumen", "Summit Legal"];

const outcomeStories = [
  {
    icon: <CheckCircle2 className="h-5 w-5" />,
    title: "More qualified inquiries",
    description: "A clearer offer and stronger proof points helped one client shift from high volume to higher quality leads.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Better sales conversations",
    description: "Prospects arrived with more context, which shortened discovery calls and improved close rates.",
  },
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "A stronger brand presence",
    description: "The final site gave the business a more premium feel that matched the quality of the work behind it.",
  },
];

function renderStars(rating: number) {
  return (
    <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  const averageRating = 5.0;

  return (
    <main className="bg-background text-foreground">
      <NavBar />
      <section className="border-b border-border/60 bg-gradient-to-b from-secondary/20 to-background">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Testimonials" }]} />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Star className="h-4 w-4 fill-current" />
              Client feedback
            </div>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Trusted by teams that need clarity, speed, and a better first impression.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              These reviews reflect the experience clients value most: thoughtful strategy, reliable communication,
              and a final result that supports growth.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
              >
                Talk to our team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold transition hover:border-primary/30 hover:bg-secondary/40"
              >
                View case studies
              </Link>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average client rating</p>
                <div className="mt-2 flex items-end gap-3">
                  <span className="text-5xl font-semibold tracking-tight">{averageRating.toFixed(1)}</span>
                  {renderStars(5)}
                </div>
              </div>
              <div className="rounded-2xl bg-secondary/50 p-4">
                <Quote className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-secondary/40 p-4">
                <p className="text-2xl font-semibold">92%</p>
                <p className="mt-1 text-sm text-muted-foreground">Clients who return for additional work</p>
              </div>
              <div className="rounded-2xl bg-secondary/40 p-4">
                <p className="text-2xl font-semibold">4.9/5</p>
                <p className="mt-1 text-sm text-muted-foreground">Average satisfaction across projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients say after launch."
          description="Short, specific feedback from teams that wanted a site they could trust in front of prospects."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item) => (
            <div key={item.author} className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-center justify-between">
                <div className="rounded-2xl bg-secondary/50 p-3 text-primary">{item.icon}</div>
                {renderStars(item.rating)}
              </div>
              <h2 className="mt-5 text-xl font-semibold tracking-tight">{item.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              <p className="mt-5 text-sm font-medium text-foreground">{item.author}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-border/60 bg-secondary/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Client logos"
            title="Teams that trust the process."
            description="A few of the brands and organizations represented in our client work."
          />
          <LogoStrip
            logos={clientLogos}
            className="mt-8"
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Outcome stories"
          title="Testimonials tied to business results."
          description="The best feedback is specific: it shows how the work changed the day-to-day experience and the bottom line."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {outcomeStories.map((story) => (
            <div key={story.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <div className="inline-flex rounded-2xl bg-primary/10 p-3 text-primary">{story.icon}</div>
              <h3 className="mt-5 text-lg font-semibold">{story.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{story.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-sm lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-medium text-primary">Video testimonials</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight">Prefer to hear it in their own words?</h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground">
              We can share recorded client stories during a discovery call so you can hear how the process felt and
              what changed after launch.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-semibold">
            <PlayCircle className="h-4 w-4 text-primary" />
            Available on request
          </div>
        </div>
      </section>

      <CTABanner
        headline="Want to see if we’re a fit?"
        description="Let’s talk about your goals, your timeline, and the kind of result you need from your website."
        buttonLabel="Schedule a call"
        buttonHref="/contact"
      />

      <Footer />
    </main>
  );
}