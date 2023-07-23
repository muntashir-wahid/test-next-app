import { render, screen } from "@testing-library/react";

import Hero from "@/components/Hero";

describe("the hero section", () => {
  it("should have a heading", () => {
    render(<Hero />);

    const headingEl = screen.getByTestId("heading");

    expect(headingEl).toHaveTextContent("Hello world");
  });
});
