import Link from "next/link";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  items,
  homeLabel = "Home",
}: {
  items: Crumb[];
  homeLabel?: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-6xl px-4 pt-6 text-sm sm:px-6"
    >
      <ol className="flex flex-wrap items-center gap-1 text-muted">
        <li>
          <Link href="/" className="hover:text-navy-900">
            {homeLabel}
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-1">
            <span aria-hidden="true">/</span>
            {item.href && index < items.length - 1 ? (
              <Link href={item.href} className="hover:text-navy-900">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-navy-900">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
