import { clsx, type ClassValue } from "clsx";

/** Merge class lists. Kept dependency-light (no tailwind-merge) since
 * this codebase doesn't compose conflicting Tailwind classes at runtime. */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}
