import { ArrowUpRight } from "lucide-react";

type ServiceCardProps = {
  icon?: React.ReactNode;
  number?: string;
  title: string;
  description: string;
};

export function ServiceCard({
  icon,
  number,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-700 transition-colors group-hover:bg-violet-100">
          {icon ?? <ArrowUpRight className="h-6 w-6" />}
        </div>
        {number ? (
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
            {number}
          </span>
        ) : null}
      </div>

      <h3 className="mt-5 text-xl font-semibold tracking-tight text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
    </article>
  );
}

export default ServiceCard;
