import Link from "next/link";
import { Check } from "lucide-react";

type PricingTableProps = {
  planName: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
};

export function PricingTable({
  planName,
  price,
  description,
  features,
  ctaLabel,
  ctaHref,
  popular = false,
}: PricingTableProps) {
  return (
    <article
      className={[
        "relative flex h-full flex-col rounded-3xl border bg-white p-8 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl",
        popular
          ? "border-blue-600 ring-2 ring-blue-600/10"
          : "border-slate-200",
      ].join(" ")}
    >
      {popular ? (
        <div className="absolute right-6 top-6 rounded-full bg-blue-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
          Most popular
        </div>
      ) : null}

      <div>
        <h3 className="text-2xl font-semibold tracking-tight text-slate-900">
          {planName}
        </h3>
        <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>

        <div className="mt-6 flex items-end gap-2">
          <span className="text-5xl font-semibold tracking-tight text-slate-900">
            {price}
          </span>
          <span className="pb-1 text-sm text-slate-500">/ project</span>
        </div>

        <ul className="mt-8 space-y-4">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-slate-700">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-blue-600" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-8">
        <Link
          href={ctaHref}
          className={[
            "inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
            popular
              ? "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-600"
              : "bg-slate-900 text-white hover:bg-slate-800 focus:ring-slate-900",
          ].join(" ")}
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}

export default PricingTable;
