import { describe, expect, it } from "vitest";
import { searchIndex, primaryNav, footerNav } from "@/lib/nav";

describe("navigation data", () => {
  it("every searchIndex entry has a non-empty label and a leading-slash href", () => {
    for (const item of searchIndex) {
      expect(item.label.length).toBeGreaterThan(0);
      expect(item.href.startsWith("/")).toBe(true);
    }
  });

  it("has no duplicate hrefs in the search index", () => {
    const hrefs = searchIndex.map((item) => item.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });

  it("every primaryNav item also appears in the searchIndex", () => {
    const searchHrefs = new Set(searchIndex.map((item) => item.href));
    for (const item of primaryNav) {
      expect(searchHrefs.has(item.href)).toBe(true);
    }
  });

  it("every internal footerNav item also appears in the searchIndex", () => {
    const searchHrefs = new Set(searchIndex.map((item) => item.href));
    for (const group of footerNav) {
      for (const item of group.items) {
        if (item.href.startsWith("/")) {
          expect(searchHrefs.has(item.href)).toBe(true);
        }
      }
    }
  });
});
