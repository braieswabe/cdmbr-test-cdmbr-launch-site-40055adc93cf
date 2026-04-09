"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock3, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import { SocialLinks } from "@/components/SocialLinks";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (field: keyof typeof formState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <NavBar />
      <main>
        <section className="border-b border-border bg-gradient-to-b from-secondary/20 to-background">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground shadow-sm">
                <Sparkles className="h-4 w-4 text-primary" />
                Let’s talk about your goals
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact us for a clear next step</h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                Whether you need a new website, a refresh, or help improving conversions, we’ll respond
                with practical guidance and a realistic plan.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="space-y-8">
            <SectionHeading
              eyebrow="Contact form"
              title="Tell us what you need"
              description="Share a few details and we’ll get back to you with the right questions, a rough timeline, and the best way to move forward."
            />
            <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="space-y-2">
                  <span className="text-sm font-medium">Name</span>
                  <input
                    value={formState.name}
                    onChange={handleChange("name")}
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
                    placeholder="Your full name"
                    required
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Email</span>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={handleChange("email")}
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
                    placeholder="you@company.com"
                    required
                  />
                </label>
                <label className="space-y-2">
                  <span className="text-sm font-medium">Phone</span>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange("phone")}
                    className="w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
                    placeholder="(555) 123-4567"
                  />
                </label>
                <div className="sm:col-span-2 space-y-2">
                  <span className="text-sm font-medium">Message</span>
                  <textarea
                    value={formState.message}
                    onChange={handleChange("message")}
                    className="min-h-40 w-full rounded-2xl border border-border bg-background px-4 py-3 outline-none transition focus:border-primary"
                    placeholder="Tell us about your project, timeline, and what success looks like."
                    required
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Send message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Contact details</h2>
              <div className="mt-5 space-y-4 text-sm">
                <a href="mailto:hello@studioatlas.com" className="flex items-center gap-3 transition hover:text-primary">
                  <Mail className="h-4 w-4 text-primary" />
                  hello@studioatlas.com
                </a>
                <a href="tel:+15551234567" className="flex items-center gap-3 transition hover:text-primary">
                  <Phone className="h-4 w-4 text-primary" />
                  +1 (555) 123-4567
                </a>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                  <p className="leading-6 text-muted-foreground">
                    1200 Market Street, Suite 400
                    <br />
                    San Francisco, CA 94102
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 h-4 w-4 text-primary" />
                  <p className="leading-6 text-muted-foreground">
                    Monday–Friday: 9:00 AM – 5:30 PM
                    <br />
                    Saturday: By appointment
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-muted/40 p-6">
              <h2 className="text-xl font-semibold">What happens next</h2>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
                <li>1. We review your message and goals.</li>
                <li>2. We reply with a few focused questions or a proposed next step.</li>
                <li>3. If it’s a fit, we schedule a call and outline the project.</li>
              </ol>
              <Link
                href="/pricing"
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:gap-3"
              >
                Review pricing
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Map and location</h2>
              <div className="mt-4 flex h-56 items-center justify-center rounded-2xl border border-dashed border-border bg-background text-center text-sm text-muted-foreground">
                Map placeholder for your office, studio, or service area
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">Find us online</h2>
              <SocialLinks
                links={[
                  { label: "LinkedIn", href: "https://www.linkedin.com", icon: "linkedin" },
                  { label: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
                  { label: "X", href: "https://x.com", icon: "x" },
                ]}
                className="mt-4"
              />
            </div>
          </aside>
        </section>
      </main>
      <Footer />
    </div>
  );
}