import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import Counter from "@/components/Counter";

describe("Counter Component", () => {
  test("Should render properly", () => {
    render(<Counter />);

    const countHeadingEl = screen.getByRole("heading", { level: 4 });
    expect(countHeadingEl).toBeInTheDocument();

    const countIncrementBtn = screen.getByRole("button", {
      name: "Increment Count",
    });
    expect(countIncrementBtn).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);

    const countHeadingEl = screen.getByRole("heading", { level: 4 });

    expect(countHeadingEl).toHaveTextContent("0");
  });

  test("render a count of 1 after clicking the increment button", async () => {
    user.setup();
    render(<Counter />);

    const countIncrementBtn = screen.getByRole("button", {
      name: "Increment Count",
    });

    await user.click(countIncrementBtn);

    const countHeadingEl = screen.getByRole("heading", { level: 4 });
    expect(countHeadingEl).toHaveTextContent("1");
  });

  test("render a count of 2 after clicking the increment button twice", async () => {
    user.setup();
    render(<Counter />);

    const countIncrementBtn = screen.getByRole("button", {
      name: "Increment Count",
    });

    await user.dblClick(countIncrementBtn);

    const countHeadingEl = screen.getByRole("heading", { level: 4 });
    expect(countHeadingEl).toHaveTextContent("2");
  });
});
