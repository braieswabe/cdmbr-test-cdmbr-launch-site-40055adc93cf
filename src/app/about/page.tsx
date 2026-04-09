import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn more about about",
};

import { Award, HeartHandshake, Lightbulb, Users, Waypoints } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Timeline } from "@/components/Timeline";

const values = [
  {
    icon: <Lightbulb className="h-5 w-5" />,
    title: "Clarity first",
    description: "We make complex ideas easy to understand so your audience can move forward with confidence.",
  },
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Partnership over transactions",
    description: "We work like an extension of your team, with honest communication and practical recommendations.",
  },
  {
    icon: <Award className="h-5 w-5" />,
    title: "Quality that lasts",
    description: "We build thoughtful systems and polished experiences that hold up as your business grows.",
  },
];

const team = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "Maya Chen — Founder & Strategy Lead",
    description: "Brand positioning, content strategy, and project direction with a focus on measurable outcomes.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Jordan Ellis — Design Lead",
    description: "Visual systems, UX detail, and responsive interfaces that feel premium on every screen.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Priya Shah — Frontend Lead",
    description: "Fast, accessible builds with clean implementation and careful attention to performance.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Noah Bennett — Client Success",
    description: "Clear timelines, smooth handoffs, and support that keeps projects moving without friction.",
  },
];

const milestones = [
  { title: "2019", description: "Started with a simple goal: help growing businesses present themselves more clearly online." },
  { title: "2021", description: "Expanded into full website strategy, design, and development for service-led teams." },
  { title: "2023", description: "Refined our process around faster launches, stronger messaging, and better conversion outcomes." },
  { title: "Today", description: "Partnering with ambitious teams that want a website they can trust to represent them well." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <Hero
          title="About our company"
          subtitle="We help businesses show up with more clarity, more confidence, and a stronger digital presence that supports real growth."
          ctaLabel="Talk to our team"
          ctaHref="/contact"
          secondaryLabel="See our work"
          secondaryHref="/portfolio"
        />

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Our story"
            title="Built for teams that need to look as credible as they are"
            description="We started because too many strong businesses were being held back by websites that were hard to understand, hard to trust, or hard to use."
          />
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <p className="text-base leading-7 text-muted-foreground">
                Our work is centered on a simple belief: when your message is clear, your audience can make a faster and more confident decision. That means less confusion, fewer dead ends, and a better experience for everyone who visits your site.
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                We combine strategy, design, and development into one streamlined process so you get a website that feels polished, performs well, and reflects the quality of your business.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 to-secondary/20 p-8 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Mission</p>
              <p className="mt-3 text-2xl font-semibold leading-tight">
                Make professional websites easier to understand, easier to trust, and easier to act on.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Values"
            title="Principles that shape every project"
            description="These values guide how we communicate, make decisions, and support clients from kickoff to launch."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold">{value.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Team"
            title="A small, senior team that stays close to the work"
            description="You work directly with people who understand strategy, design, and delivery — no handoffs to a maze of account layers."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <TeamMemberCard key={member.title} {...member} />
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <SectionHeading
            eyebrow="Timeline"
            title="A steady progression toward better client outcomes"
            description="Each milestone reflects a stronger process and a sharper focus on what helps clients succeed."
          />
          <Timeline items={milestones} className="mt-10" />
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <SectionHeading
              eyebrow="Why choose us"
              title="A practical partner for businesses that want to look established"
              description="We bring a calm process, strong communication, and a focus on outcomes that matter to your team."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                "Clear scope and straightforward recommendations",
                "Modern design that supports trust and conversion",
                "Responsive support from kickoff through launch",
              ].map((item) => (
                <div key={item} className="rounded-2xl bg-muted p-4 text-sm font-medium">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}