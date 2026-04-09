import Link from "next/link";
import { ArrowRight, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Blog", href: "/blog" },
  { label: "Features", href: "/features" },
  { label: "Careers", href: "/careers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Page", href: "/generic" }
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com", icon: Facebook }
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
              P
            </span>
            <div>
              <p className="text-lg font-semibold text-white">Professional website</p>
              <p className="text-sm text-slate-400">Modern digital presence for growing teams</p>
            </div>
          </div>

          <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
            We help service businesses present a sharper brand, explain their value clearly,
            and turn interest into qualified conversations.
          </p>

          <div className="mt-6 space-y-3 text-sm text-slate-300">
            <a
              href="mailto:hello@professionalwebsite.com"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Mail className="h-4 w-4 text-blue-400" />
              hello@professionalwebsite.com
            </a>
            <a
              href="tel:+10000000000"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Phone className="h-4 w-4 text-blue-400" />
              +1 (000) 000-0000
            </a>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Explore
          </h2>
          <ul className="mt-5 grid grid-cols-2 gap-3 text-sm">
            {footerLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 text-slate-300 transition hover:text-white"
                >
                  <ArrowRight className="h-3.5 w-3.5 text-blue-400" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Social
          </h2>
          <div className="mt-5 space-y-3">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-slate-300 transition hover:border-slate-700 hover:bg-slate-800 hover:text-white"
                >
                  <Icon className="h-4 w-4 text-blue-400" />
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-3">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
            Newsletter
          </h2>
          <p className="mt-5 text-sm leading-6 text-slate-400">
            Get practical insights on positioning, design, and conversion strategy.
          </p>

          <form className="mt-4 space-y-3">
            <label className="sr-only" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110"
            >
              Subscribe
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Professional website. All rights reserved.</p>
          <p>Built for clarity, trust, and measurable growth.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
