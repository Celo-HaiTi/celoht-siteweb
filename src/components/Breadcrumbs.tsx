import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mx-auto max-w-6xl px-4 pt-6 text-sm sm:px-6">
      <ol className="flex flex-wrap items-center gap-1 text-ink-soft dark:text-parchment-100/60">
        <li>
          <Link href="/" className="hover:text-ink dark:hover:text-parchment-100">
            Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1">
            <span aria-hidden="true">/</span>
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="hover:text-ink dark:hover:text-parchment-100">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink dark:text-parchment-100">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
