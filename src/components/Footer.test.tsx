import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "@/components/Footer";

describe("Footer", () => {
  it("renders the institutional brand footer, social links, and newsletter form", () => {
    render(<Footer />);

    expect(screen.getAllByText("CeloHT").length).toBeGreaterThan(0);
    expect(screen.getByText(/stay connected with celoht/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /linkedin/i })).toHaveAttribute(
      "href",
      "https://linkedin.com/company/celoht",
    );
    expect(screen.getByRole("link", { name: /instagram/i })).toHaveAttribute(
      "href",
      "https://instagram.com/celoht",
    );
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/Celo-HaiTi",
    );
    expect(screen.getByRole("link", { name: /tiktok/i })).toHaveAttribute(
      "href",
      "https://www.tiktok.com/@celohtofficial",
    );

    expect(screen.getByRole("button", { name: /subscribe/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByText(/organization/i)).toBeInTheDocument();
    expect(screen.getByText(/legal/i)).toBeInTheDocument();
  });
});
