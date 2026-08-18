import { describe, expect, it } from "vitest";
import { cn } from "@/lib/utils";

describe("cn", () => {
  it("joins truthy class names with a space", () => {
    expect(cn("a", "b", "c")).toBe("a b c");
  });

  it("drops falsy values", () => {
    expect(cn("a", false, undefined, null, "", "b")).toBe("a b");
  });

  it("returns an empty string when given nothing truthy", () => {
    expect(cn(false, undefined, null)).toBe("");
  });
});
