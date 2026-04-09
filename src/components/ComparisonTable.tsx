export type ComparisonFeature = {
  label: string;
  included: boolean;
  note?: string;
};

export type ComparisonPlan = {
  name: string;
  description?: string;
  highlighted?: boolean;
  price?: string;
  features: ComparisonFeature[];
};

export type ComparisonTableProps = {
  title?: string;
  description?: string;
  plans: ComparisonPlan[];
  className?: string;
};

export function ComparisonTable({
  title = "Compare your options",
  description = "See what’s included at a glance so you can choose the right fit with confidence.",
  plans,
  className = "",
}: ComparisonTableProps) {
  const featureLabels = Array.from(
    new Set(plans.flatMap((plan) => plan.features.map((feature) => feature.label)))
  );

  return (
    <section className={`w-full ${className}`.trim()}>
      <div className="mb-6 max-w-2xl">
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-base leading-7 text-[var(--muted-foreground)]">
          {description}
        </p>
      </div>

      <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
        <div className="grid min-w-[760px] grid-cols-[1.2fr_repeat(3,minmax(0,1fr))] border-b border-[var(--border)] bg-[var(--muted)]/40">
          <div className="p-5 font-medium text-[var(--foreground)]">Feature</div>
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`p-5 ${plan.highlighted ? "bg-[var(--primary)]/5" : ""}`}
            >
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-[var(--foreground)]">{plan.name}</h3>
                {plan.highlighted ? (
                  <span className="rounded-full bg-[var(--primary)] px-2.5 py-0.5 text-xs font-medium text-[var(--primary-foreground)]">
                    Popular
                  </span>
                ) : null}
              </div>
              {plan.price ? (
                <p className="mt-1 text-sm text-[var(--muted-foreground)]">{plan.price}</p>
              ) : null}
              {plan.description ? (
                <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                  {plan.description}
                </p>
              ) : null}
            </div>
          ))}
        </div>

        <div className="min-w-[760px]">
          {featureLabels.map((label, index) => (
            <div
              key={label}
              className={`grid grid-cols-[1.2fr_repeat(3,minmax(0,1fr))] items-start border-b border-[var(--border)] last:border-b-0 ${
                index % 2 === 0 ? "bg-[var(--background)]" : "bg-[var(--muted)]/20"
              }`}
            >
              <div className="p-5">
                <p className="font-medium text-[var(--foreground)]">{label}</p>
              </div>

              {plans.map((plan) => {
                const feature = plan.features.find((item) => item.label === label);

                return (
                  <div
                    key={`${plan.name}-${label}`}
                    className={`p-5 ${plan.highlighted ? "bg-[var(--primary)]/5" : ""}`}
                  >
                    {feature?.included ? (
                      <div className="space-y-1">
                        <div className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-sm font-medium text-emerald-700">
                          Included
                        </div>
                        {feature.note ? (
                          <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                            {feature.note}
                          </p>
                        ) : null}
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="inline-flex items-center rounded-full bg-[var(--muted)] px-2.5 py-1 text-sm font-medium text-[var(--muted-foreground)]">
                          Not included
                        </div>
                        {feature?.note ? (
                          <p className="text-sm leading-6 text-[var(--muted-foreground)]">
                            {feature.note}
                          </p>
                        ) : null}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComparisonTable;
