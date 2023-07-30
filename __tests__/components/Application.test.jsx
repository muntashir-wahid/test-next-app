import Application from "@/components/Application";
import { render, screen } from "@testing-library/react";

describe("Testing the application component", () => {
  test("Renders properly", () => {
    render(<Application />);

    const primaryHeadingEl = screen.getByRole("heading", { level: 1 });
    expect(primaryHeadingEl).toBeInTheDocument();

    const secondaryHeadingEl = screen.getByRole("heading", { level: 2 });
    expect(secondaryHeadingEl).toBeInTheDocument();

    const nameInputEl = screen.getByRole("textbox", { name: "Your Name:" });
    expect(nameInputEl).toBeInTheDocument();

    const locationEl = screen.getByRole("combobox");
    expect(locationEl).toBeInTheDocument();

    const termsEl = screen.getByRole("checkbox");
    expect(termsEl).toBeInTheDocument();

    const bioInputEl = screen.getByRole("textbox", { name: "Your Bio:" });
    expect(bioInputEl).toBeInTheDocument();

    const btnEl = screen.getByRole("button");
    expect(btnEl).toBeInTheDocument();
  });
});
