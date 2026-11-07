import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "@/components/Footer";

describe("Footer", () => {
  it("renders a minimal brand footer without legacy legal or explanatory copy", () => {
    render(<Footer />);

    expect(
      screen.getByRole("img", { name: /celoht logo/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("CeloHT")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      expect.stringContaining("github.com"),
    );
    expect(screen.getByRole("link", { name: /discord/i })).toHaveAttribute(
      "href",
      expect.stringContaining("discord"),
    );
    expect(screen.getByRole("link", { name: /medium/i })).toHaveAttribute(
      "href",
      expect.stringContaining("medium.com"),
    );
    expect(
      screen.getByText(/© \d{4} CeloHT\. All rights reserved\./i),
    ).toBeInTheDocument();

    expect(
      screen.queryByText(
        /A community-driven, open-source initiative built on the Celo ecosystem/i,
      ),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/not affiliated with or endorsed by/i),
    ).not.toBeInTheDocument();
  });
});
