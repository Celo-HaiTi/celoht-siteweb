import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("positions the real CeloHT product layer as a platform, not a fake dashboard", () => {
    render(<HomePage />);

    expect(screen.getByText(/CeloHT Platform/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /open wallet/i })).toHaveAttribute(
      "href",
      expect.stringContaining("https://"),
    );
    expect(screen.getByText(/The CeloHT product layer/i)).toBeInTheDocument();
    expect(screen.queryByText(/demo data/i)).not.toBeInTheDocument();
    expect(
      screen.queryByText(/illustrative interface/i),
    ).not.toBeInTheDocument();
    expect(screen.queryByText(/\$1,240\.80/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/42\.4/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/trees tracked/i)).not.toBeInTheDocument();
  });
});
