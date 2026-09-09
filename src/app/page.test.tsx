import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HomePage from "@/app/page";

describe("HomePage", () => {
  it("positions the real CeloHT product layer as a finance product preview", () => {
    render(<HomePage />);

    expect(screen.getByText(/The CeloHT product layer/i)).toBeInTheDocument();
    expect(screen.getByText(/CeloHT · Finance/i)).toBeInTheDocument();
    expect(screen.getByText(/0xAC4F2AE7…9c94Bb66/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Celo Sepolia/i).length).toBeGreaterThan(0);
    expect(
      screen.getByRole("button", { name: /disconnect wallet/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Send" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Receive" })).toBeInTheDocument();
    expect(screen.queryByText(/network not connected/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/no wallet connected yet/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/mockup/i)).not.toBeInTheDocument();
  });
});
