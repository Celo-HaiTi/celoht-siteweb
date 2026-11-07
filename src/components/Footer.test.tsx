import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Footer } from "@/components/Footer";

describe("Footer", () => {
  it("renders the official social links without the retired footer intro and newsletter block", () => {
    render(<Footer />);

    expect(
      screen.queryByText(/stay connected with celoht/i),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByText(/CeloHT is a community-driven/i),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: /subscribe/i }),
    ).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/email address/i)).not.toBeInTheDocument();

    expect(
      screen.queryByRole("link", { name: /website/i }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("link", { name: /github/i })).toHaveAttribute(
      "href",
      "https://github.com/Celo-HaiTi",
    );
    expect(screen.getByRole("link", { name: /instagram/i })).toHaveAttribute(
      "href",
      "https://www.instagram.com/celohtofficial/",
    );
    expect(screen.getByRole("link", { name: /tiktok/i })).toHaveAttribute(
      "href",
      "https://www.tiktok.com/@celohtofficial",
    );
    expect(screen.getByRole("link", { name: /medium/i })).toHaveAttribute(
      "href",
      "https://medium.com/@celoht3/",
    );

    expect(screen.getByText(/organization/i)).toBeInTheDocument();
  });
});
