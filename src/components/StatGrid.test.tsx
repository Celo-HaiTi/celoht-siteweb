import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { StatGrid } from "@/components/StatGrid";

describe("StatGrid", () => {
  it("renders a definition term and value for every stat", () => {
    render(
      <StatGrid
        stats={[
          { value: "3", label: "Permanent pillars" },
          { value: "5", label: "Open-source contracts" },
        ]}
      />,
    );

    expect(screen.getByText("Permanent pillars")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("Open-source contracts")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });
});
