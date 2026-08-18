import { describe, expect, it } from "vitest";
import { DAPP_URL, SITE_URL, GITHUB_ORG_URL } from "@/lib/constants";

describe("constants", () => {
  it("DAPP_URL is a well-formed absolute URL", () => {
    expect(() => new URL(DAPP_URL)).not.toThrow();
  });

  it("SITE_URL and GITHUB_ORG_URL are well-formed absolute URLs", () => {
    expect(() => new URL(SITE_URL)).not.toThrow();
    expect(() => new URL(GITHUB_ORG_URL)).not.toThrow();
  });
});
