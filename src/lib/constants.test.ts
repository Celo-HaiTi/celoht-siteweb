import { afterEach, describe, expect, it, vi } from "vitest";
import { DAPP_URL, SITE_URL, GITHUB_ORG_URL } from "@/lib/constants";

describe("constants", () => {
  afterEach(() => {
    vi.resetModules();
  });

  it("DAPP_URL is a well-formed absolute URL", () => {
    expect(() => new URL(DAPP_URL)).not.toThrow();
  });

  it("SITE_URL and GITHUB_ORG_URL are well-formed absolute URLs", () => {
    expect(() => new URL(SITE_URL)).not.toThrow();
    expect(() => new URL(GITHUB_ORG_URL)).not.toThrow();
  });

  it("does not force a repo base path for the custom-domain production build", async () => {
    const previous = { ...process.env };
    process.env.GITHUB_PAGES = "true";
    process.env.NEXT_PUBLIC_SITE_URL = "https://celoht.com";
    delete process.env.NEXT_PUBLIC_USE_PROJECT_BASE_PATH;
    process.env.GITHUB_REPOSITORY = "Celo-HaiTi/celoht-siteweb";

    try {
      const { BASE_PATH, assetPath } = await import("@/lib/constants");
      expect(BASE_PATH).toBe("");
      expect(assetPath("/favicon.svg")).toBe("/favicon.svg");
    } finally {
      process.env = previous;
    }
  });

  it("ignores project-base-path opt-in on the custom domain", async () => {
    const previous = { ...process.env };
    process.env.NEXT_PUBLIC_SITE_URL = "https://celoht.com";
    process.env.NEXT_PUBLIC_USE_PROJECT_BASE_PATH = "true";
    process.env.GITHUB_REPOSITORY = "Celo-HaiTi/celoht-siteweb";

    try {
      const { BASE_PATH, assetPath } = await import("@/lib/constants");
      expect(BASE_PATH).toBe("");
      expect(assetPath("/favicon.svg")).toBe("/favicon.svg");
    } finally {
      process.env = previous;
    }
  });

  it("supports an explicit GitHub Pages project-site base path", async () => {
    const previous = { ...process.env };
    process.env.NEXT_PUBLIC_SITE_URL =
      "https://celo-haiti.github.io/celoht-siteweb";
    process.env.NEXT_PUBLIC_USE_PROJECT_BASE_PATH = "true";
    process.env.GITHUB_REPOSITORY = "Celo-HaiTi/celoht-siteweb";

    try {
      const { BASE_PATH, assetPath } = await import("@/lib/constants");
      expect(BASE_PATH).toBe("/celoht-siteweb");
      expect(assetPath("/favicon.svg")).toBe("/celoht-siteweb/favicon.svg");
    } finally {
      process.env = previous;
    }
  });
});
