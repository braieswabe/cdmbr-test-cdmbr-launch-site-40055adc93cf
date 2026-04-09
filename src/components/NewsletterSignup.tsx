"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Mail } from "lucide-react";

export type NewsletterSignupProps = {
  heading?: string;
  description?: string;
  placeholder?: string;
  buttonLabel?: string;
  privacyNote?: string;
  onSubmit?: (email: string) => Promise<void> | void;
  className?: string;
};

export function NewsletterSignup({
  heading = "Stay in the loop",
  description = "Get practical insights, product updates, and proven ideas for growing with less friction.",
  placeholder = "Enter your email address",
  buttonLabel = "Subscribe",
  privacyNote = "No spam. Unsubscribe anytime.",
  onSubmit,
  className = "",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    if (!email.trim() || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }

    try {
      setStatus("loading");
      await onSubmit?.(email.trim());
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <section
      className={`rounded-3xl border border-[var(--border)] bg-gradient-to-br from-[var(--card)] via-[var(--card)] to-[var(--muted)] p-6 shadow-sm sm:p-8 ${className}`.trim()}
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[var(--primary)]/10 px-3 py-1 text-sm font-medium text-[var(--primary)]">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Newsletter
          </div>
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--foreground)] sm:text-3xl">
            {heading}
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--muted-foreground)]">
            {description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="sr-only" htmlFor="newsletter-email">
              Email address
            </label>
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--muted-foreground)]" />
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={placeholder}
                className="w-full rounded-full border border-[var(--border)] bg-[var(--background)] py-3 pl-10 pr-4 text-[var(--foreground)] shadow-sm outline-none transition focus:border-[var(--primary)] focus:ring-2 focus:ring-[var(--ring)]"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 font-medium text-[var(--primary-foreground)] shadow-sm transition-all duration-200 hover:bg-[var(--primary)]/90 hover:shadow-md disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "success" ? (
                <>
                  <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                  Subscribed
                </>
              ) : (
                <>
                  {status === "loading" ? "Submitting..." : buttonLabel}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </>
              )}
            </button>
          </div>

          {error ? (
            <p className="text-sm font-medium text-red-600">{error}</p>
          ) : (
            <p className="text-sm text-[var(--muted-foreground)]">{privacyNote}</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default NewsletterSignup;
