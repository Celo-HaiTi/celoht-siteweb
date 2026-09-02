import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("marks the dApp panel as a product preview and avoids fabricated balances", () => {
    render(<HomePage />);

    expect(screen.getByText(/product preview/i)).toBeInTheDocument();
    expect(screen.getByText(/illustrative interface/i)).toBeInTheDocument();
    expect(screen.queryByText(/\$1,240\.80/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/42\.4/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/trees tracked/i)).not.toBeInTheDocument();
  });
});
