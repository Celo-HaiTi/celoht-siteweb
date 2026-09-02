import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { LaunchDappButton } from "@/components/LaunchDappButton";

describe("LaunchDappButton", () => {
  it("renders the primary CeloHT dApp CTA with the approved label", () => {
    render(<LaunchDappButton />);

    const link = screen.getByRole("link", { name: /open celoht dapp/i });
    expect(link).toHaveAttribute("href", "https://app.celoht.com");
  });
});
