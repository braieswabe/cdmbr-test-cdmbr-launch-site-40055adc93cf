import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

type CTABannerProps = {
  headline: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
};

export function CTABanner({
  headline,
  description,
  buttonLabel,
  buttonHref,
}: CTABannerProps) {
  return (
    <section className="px-6 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl rounded-3xl bg-amber-500 px-6 py-10 text-white shadow-xl shadow-amber-500/20 sm:px-10 sm:py-12">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            Ready to move faster?
          </div>

          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {headline}
          </h2>

          <p className="mt-4 max-w-2xl text-base leading-7 text-white/90 sm:text-lg">
            {description}
          </p>

          <Link
            href={buttonHref}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-amber-600 shadow-lg transition-transform duration-200 hover:-translate-y-0.5 hover:bg-amber-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-500"
          >
            {buttonLabel}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;
