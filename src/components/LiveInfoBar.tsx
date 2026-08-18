const indicators = [
  { label: "CELO price", value: "Unavailable", detail: "No live feed connected" },
  { label: "USDm", value: "Celo asset", detail: "Used as a payment medium" },
  { label: "Celo network", value: "Check provider", detail: "Live monitoring unavailable" },
  { label: "CeloHT DApp", value: "Open product", detail: "Launch to verify access" },
];

export function LiveInfoBar() {
  return (
    <section aria-label="CeloHT information bar" className="border-b border-navy-700/10 bg-parchment-100/70 dark:border-parchment-100/10 dark:bg-navy-900/70">
      <div className="mx-auto grid max-w-6xl divide-y divide-navy-700/10 px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-6 lg:grid-cols-4 dark:divide-parchment-100/10">
        {indicators.map((indicator) => (
          <div key={indicator.label} className="flex items-center justify-between gap-4 py-3 sm:px-5 lg:first:pl-0">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-ink-soft dark:text-parchment-100/50">
              {indicator.label}
            </span>
            <span className="text-right">
              <strong className="block text-xs font-semibold text-ink dark:text-parchment-50">{indicator.value}</strong>
              <span className="block text-[0.65rem] text-ink-soft dark:text-parchment-100/45">{indicator.detail}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
