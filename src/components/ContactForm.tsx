"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type ContactFormProps = {
  className?: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Tell us a little about your project.";

  return errors;
}

export function ContactForm({ className }: ContactFormProps) {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setValues(initialState);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={cn(
        "rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm sm:p-8",
        className
      )}
      noValidate
    >
      <div className="grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-sm font-medium text-[var(--foreground)]">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className={cn(
              "w-full rounded-xl border bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:ring-2 focus:ring-[var(--ring)]",
              errors.name ? "border-red-500" : "border-[var(--border)]"
            )}
            placeholder="Jordan Lee"
          />
          {errors.name ? <p className="text-sm text-red-600">{errors.name}</p> : null}
        </div>

        <div className="grid gap-2">
          <label htmlFor="email" className="text-sm font-medium text-[var(--foreground)]">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            className={cn(
              "w-full rounded-xl border bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:ring-2 focus:ring-[var(--ring)]",
              errors.email ? "border-red-500" : "border-[var(--border)]"
            )}
            placeholder="jordan@company.com"
          />
          {errors.email ? <p className="text-sm text-red-600">{errors.email}</p> : null}
        </div>

        <div className="grid gap-2">
          <label htmlFor="company" className="text-sm font-medium text-[var(--foreground)]">
            Company
          </label>
          <input
            id="company"
            name="company"
            value={values.company}
            onChange={handleChange}
            className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:ring-2 focus:ring-[var(--ring)]"
            placeholder="Acme Studio"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-sm font-medium text-[var(--foreground)]">
            Project details
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={values.message}
            onChange={handleChange}
            className={cn(
              "w-full rounded-xl border bg-[var(--background)] px-4 py-3 text-sm text-[var(--foreground)] outline-none transition focus:ring-2 focus:ring-[var(--ring)]",
              errors.message ? "border-red-500" : "border-[var(--border)]"
            )}
            placeholder="Tell us what you’re building, your timeline, and what success looks like."
          />
          {errors.message ? <p className="text-sm text-red-600">{errors.message}</p> : null}
        </div>

        {submitted ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
            Thanks — your message is ready to send. We’ll follow up within one business day.
          </div>
        ) : null}

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[var(--secondary)] hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--background)]"
        >
          Send inquiry
          <Send className="h-4 w-4" />
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
