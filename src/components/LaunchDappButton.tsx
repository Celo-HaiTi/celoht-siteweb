import { ArrowUpRight } from "lucide-react";
import { DAPP_URL } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Props = {
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClasses = {
  sm: "px-4 py-2 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

/**
 * The dApp isn't live yet (see docs/roadmap.md)  -  this links to
 * NEXT_PUBLIC_DAPP_URL (defaulting to app.celoht.com) so the button is
 * wired correctly the moment it ships, without a code change here.
 */
export function LaunchDappButton({ size = "md", className }: Props) {
  return (
    <a
      href={DAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Launch CeloHT dApp"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-gold-500 font-semibold text-navy-950 transition-colors hover:bg-gold-600",
        sizeClasses[size],
        className,
      )}
    >
      Launch CeloHT dApp
      <ArrowUpRight size={size === "lg" ? 18 : 14} aria-hidden="true" />
    </a>
  );
}
