type Stat = { value: string; label: string };

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="celoht-metric-card border border-parchment-100 bg-white p-5 shadow-[0_10px_25px_rgba(8,18,37,0.05)]"
        >
          <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
            {stat.label}
          </dt>
          <dd className="mt-2 font-mono text-3xl font-bold text-gold-700">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
