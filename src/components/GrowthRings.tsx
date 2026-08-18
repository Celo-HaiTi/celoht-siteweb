type Props = { className?: string };

/**
 * The CeloHT "Growth Rings" mark: concentric arcs read as tree rings
 * (Reforestation) and as an expanding network (Agent Network); the outer
 * ring breaks and rises into a line (financial growth, echoing the
 * logo's arrow). Purely decorative  -  always aria-hidden.
 */
export function GrowthRings({ className }: Props) {
  return (
    <svg viewBox="0 0 480 480" fill="none" aria-hidden="true" className={className}>
      <circle
        cx="240"
        cy="240"
        r="60"
        stroke="currentColor"
        strokeOpacity="0.9"
        strokeWidth="1.5"
      />
      <circle
        cx="240"
        cy="240"
        r="100"
        stroke="currentColor"
        strokeOpacity="0.7"
        strokeWidth="1.5"
      />
      <circle
        cx="240"
        cy="240"
        r="140"
        stroke="currentColor"
        strokeOpacity="0.5"
        strokeWidth="1.5"
      />
      <path
        d="M240 100 A140 140 0 0 1 380 240"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M380 240 L420 240 L440 190 L460 260 L480 150"
        stroke="var(--color-gold-500)"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="240" cy="240" r="6" fill="var(--color-gold-500)" />
    </svg>
  );
}
