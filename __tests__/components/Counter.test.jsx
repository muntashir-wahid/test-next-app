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

  test("renders a count of 10 after clicking the set button", async () => {
    user.setup();

    render(<Counter />);

    const amountInputEl = screen.getByRole("spinbutton");
    await user.type(amountInputEl, "10");
    expect(amountInputEl).toHaveValue(10);

    const setBtnEl = screen.getByRole("button", { name: "Set" });
    await user.click(setBtnEl);
    const countHeadingEl = screen.getByRole("heading", { level: 4 });
    expect(countHeadingEl).toHaveTextContent("10");
  });
});
