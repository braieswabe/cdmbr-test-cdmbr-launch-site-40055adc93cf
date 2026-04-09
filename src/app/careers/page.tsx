import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description: "Learn more about careers",
};

import Link from "next/link";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Clock3, HeartHandshake, MapPin, Sparkles, Users } from "lucide-react";
import { CTABanner } from "@/components/CTABanner";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { NavBar } from "@/components/NavBar";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { Timeline } from "@/components/Timeline";

const openRoles = [
  {
    title: "Senior Next.js Engineer",
    location: "Remote / Hybrid",
    requirements: [
      "5+ years building production React and Next.js applications",
      "Strong TypeScript, accessibility, and performance fundamentals",
      "Experience shipping polished UI systems with design teams",
    ],
  },
  {
    title: "Product Designer",
    location: "Remote",
    requirements: [
      "Portfolio showing thoughtful web and product design work",
      "Comfort turning complex ideas into simple user journeys",
      "Experience collaborating closely with engineers and stakeholders",
    ],
  },
  {
    title: "Client Success Manager",
    location: "Hybrid",
    requirements: [
      "Excellent communication and project coordination skills",
      "Ability to guide clients through timelines, feedback, and launch",
      "A calm, organized approach to keeping work moving forward",
    ],
  },
];

const benefits = [
  {
    icon: <HeartHandshake className="h-5 w-5" />,
    title: "Meaningful work",
    description: "Build websites and digital experiences that help real businesses grow, communicate clearly, and convert better.",
  },
  {
    icon: <Clock3 className="h-5 w-5" />,
    title: "Flexible rhythm",
    description: "Work with a team that values focus time, clear priorities, and a healthy pace over performative busyness.",
  },
  {
    icon: <BadgeCheck className="h-5 w-5" />,
    title: "Growth support",
    description: "Get room to learn, lead, and expand your craft with feedback, mentorship, and visible ownership.",
  },
];

const cultureItems = [
  {
    title: "We keep things clear",
    description: "We write things down, share context early, and make decisions with the client’s goals in mind.",
  },
  {
    title: "We care about the details",
    description: "From spacing and motion to copy and accessibility, we believe the small things shape trust.",
  },
  {
    title: "We work like partners",
    description: "Everyone contributes ideas, asks good questions, and helps move the work forward together.",
  },
];

const timelineItems = [
  {
    title: "Apply",
    description: "Send your resume, portfolio, and a short note about the kind of work you want to do next.",
  },
  {
    title: "Intro call",
    description: "Meet the team, learn how we work, and ask questions about the role and the business.",
  },
  {
    title: "Practical conversation",
    description: "Talk through real scenarios, collaboration style, and the standards we use to ship quality work.",
  },
  {
    title: "Offer and onboarding",
    description: "If it’s a fit, we move quickly and set you up with the context you need to contribute early.",
  },
];

const teamMembers = [
  {
    icon: <Users className="h-5 w-5" />,
    title: "Small team, high trust",
    description: "You’ll work directly with people who care about quality, communicate clearly, and respect your time.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "High standards, low ego",
    description: "We value thoughtful critique, shared ownership, and a culture where good ideas can come from anywhere.",
  },
  {
    icon: <BriefcaseBusiness className="h-5 w-5" />,
    title: "Real client impact",
    description: "Your work will be seen, used, and measured by businesses that depend on it to win trust and grow.",
  },
];

export default function CareersPage() {
  return (
    <main className="bg-background text-foreground">
      <NavBar />
      <Hero
        title="Join a team that builds with clarity, care, and momentum."
        subtitle="We design and develop digital experiences that help businesses look credible, communicate better, and win more of the right work. If you like solving real problems and shipping polished results, you’ll fit right in."
        ctaLabel="View open roles"
        ctaHref="#open-roles"
        secondaryLabel="Learn about our culture"
        secondaryHref="#culture"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Open roles"
          title="Current opportunities"
          description="We’re looking for people who care about craft, communication, and outcomes. If you don’t see the perfect role, we still want to hear from you."
        />
        <div id="open-roles" className="mt-10 grid gap-6 lg:grid-cols-3">
          {openRoles.map((role) => (
            <article key={role.title} className="rounded-3xl border border-border bg-card p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold">{role.title}</h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    {role.location}
                  </p>
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">Hiring now</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                {role.requirements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Benefits"
            title="Support that helps you do your best work"
            description="We want the team to feel energized, respected, and set up for long-term growth."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">{item.icon}</div>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Culture"
          title="A working style built on trust and momentum"
          description="We keep the process simple: clear goals, honest feedback, and a shared commitment to quality."
        />
        <div id="culture" className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h3 className="text-xl font-semibold">What it feels like to work here</h3>
            <div className="mt-6 space-y-5">
              {cultureItems.map((item) => (
                <div key={item.title}>
                  <h4 className="font-medium">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-background to-secondary/20 p-8 shadow-sm">
            <h3 className="text-xl font-semibold">How we grow together</h3>
            <div className="mt-6 space-y-4">
              {timelineItems.map((item) => (
                <Timeline key={item.title} items={[item]} className="!mt-0" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Team"
            title="People you’ll actually enjoy working with"
            description="We hire for communication, ownership, and a steady sense of craft."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <TeamMemberCard key={member.title} icon={member.icon} title={member.title} description={member.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <CTABanner
          headline="Think you’d be a great fit?"
          description="Send us your resume and portfolio, or reach out with a short note about the kind of role you’re looking for."
          buttonLabel="Apply now"
          buttonHref="/contact"
        />
        <div className="mt-6 text-center text-sm text-muted-foreground">
          Prefer a quick intro first?{" "}
          <Link href="/contact" className="font-medium text-primary underline-offset-4 hover:underline">
            Start a conversation
          </Link>
          .
        </div>
      </section>
      <Footer />
    </main>
  );
}