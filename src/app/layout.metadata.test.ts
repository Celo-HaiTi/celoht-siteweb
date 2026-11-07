import { describe, expect, it } from "vitest";
import { metadata } from "@/app/layout";

describe("application metadata branding", () => {
  it("uses the official CeloHT logo and production URLs for browser and PWA assets", () => {
    const titleValue = metadata.title;
    const resolvedTitle =
      typeof titleValue === "string"
        ? titleValue
        : typeof titleValue === "object" &&
            titleValue !== null &&
            "default" in titleValue
          ? String(titleValue.default)
          : "";

    expect(resolvedTitle).toBe("CeloHT");
    expect(metadata.applicationName).toBe("CeloHT");

    const icons = metadata.icons as
      | {
          icon?: Array<{ url?: string }>;
          apple?: string;
        }
      | undefined;

    expect(metadata.manifest).toBe(
      "https://celoht.com/manifest.json?v=20261107",
    );
    expect(icons?.icon).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          url: "https://celoht.com/favicon-32x32.png?v=20261107&s=32x32",
        }),
        expect.objectContaining({
          url: "https://celoht.com/favicon-16x16.png?v=20261107&s=16x16",
        }),
        expect.objectContaining({
          url: "https://celoht.com/favicon.ico?v=20261107",
        }),
      ]),
    );
    expect(icons?.apple).toBe(
      "https://celoht.com/apple-touch-icon.png?v=20261107&s=180x180",
    );

    expect(JSON.stringify(metadata)).not.toContain("vercel");
    expect(JSON.stringify(metadata)).not.toContain("next.svg");
  });
});
