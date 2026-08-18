type Stat = { value: string; label: string };

export function StatGrid({ stats }: { stats: Stat[] }) {
  return (
    <dl className="grid grid-cols-2 gap-6 sm:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="rounded-xl border border-navy-700/10 p-5 dark:border-parchment-100/10"
        >
          <dt className="text-xs uppercase tracking-wide text-ink-soft dark:text-parchment-100/50">
            {stat.label}
          </dt>
          <dd className="mt-1 font-mono text-3xl font-semibold text-navy-800 dark:text-gold-300">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
