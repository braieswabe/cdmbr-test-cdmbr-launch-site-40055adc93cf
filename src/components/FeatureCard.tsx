import { CheckCircle2 } from "lucide-react";

type FeatureCardProps = {
  icon?: React.ReactNode;
  number?: string;
  title: string;
  description: string;
};

export function FeatureCard({
  icon,
  number,
  title,
  description,
}: FeatureCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-700 transition-colors group-hover:bg-blue-100">
          {icon ?? <CheckCircle2 className="h-6 w-6" />}
        </div>
        {number ? (
          <span className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {number}
          </span>
        ) : null}
      </div>

      <h3 className="text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

export default FeatureCard;
