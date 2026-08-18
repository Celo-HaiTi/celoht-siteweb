"use client";

import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      className="border-navy-700/20 text-ink hover:bg-navy-700/10 dark:border-parchment-100/20 dark:text-parchment-100 dark:hover:bg-parchment-100/10 inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
    >
      <span className="sr-only">{isDark ? "Switch to light theme" : "Switch to dark theme"}</span>
      {isDark ? (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.66-6.66 1.42-1.42M4.92 19.08l1.42-1.42M19.08 19.08l-1.42-1.42M4.92 4.92 6.34 6.34M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Z"
            strokeWidth="0"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M20.742 13.045a8.088 8.088 0 0 1-2.077.273c-4.508 0-8.16-3.65-8.16-8.157 0-1.578.453-3.05 1.24-4.293a10.14 10.14 0 1 0 8.997 12.177Z"
          />
        </svg>
      )}
    </button>
  );
}
