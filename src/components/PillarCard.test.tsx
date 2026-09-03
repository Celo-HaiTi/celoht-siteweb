import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { PillarCard } from "@/components/PillarCard";

describe("PillarCard", () => {
  it("renders the title, description, and a link to the given href", () => {
    render(
      <PillarCard
        number="01"
        title="Education"
        description="Financial literacy and Web3 fundamentals."
        href="/education"
        accent="gold"
        icon="📘"
      />,
    );

    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(
      screen.getByText("Financial literacy and Web3 fundamentals."),
    ).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", "/education");
  });
});
