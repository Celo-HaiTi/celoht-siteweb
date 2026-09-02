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

export function LaunchDappButton({ size = "md", className }: Props) {
  return (
    <a
      href={DAPP_URL}
      target="_blank"
      rel="noreferrer"
      aria-label="Open CeloHT dApp"
      className={cn(
        "inline-flex min-h-11 items-center gap-1.5 rounded-md bg-gold-500 font-bold text-navy-950 transition-colors hover:bg-gold-300",
        sizeClasses[size],
        className,
      )}
    >
      Open CeloHT dApp
      <ArrowUpRight size={size === "lg" ? 18 : 14} aria-hidden="true" />
    </a>
  );
}
