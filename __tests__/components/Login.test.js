import { render, fireEvent, screen } from "@testing-library/react";

import Login from "@/components/Login";

describe("Test the login form", () => {
  it("user name field should change the value", () => {
    render(<Login />);
    const userNameEl = screen.getByTestId("username-field");

    const testValue = "Muntashir";

    fireEvent.change(userNameEl, { target: { value: "Muntashir" } });

    expect(userNameEl.value).toBe(testValue);
  });

  it("password name field", () => {
    render(<Login />);
    const passwordEl = screen.getByTestId("password-field");

    const testValue = "12345678";

    fireEvent.change(passwordEl, { target: { value: testValue } });

    expect(passwordEl.value).toBe(testValue);
  });

  it("should enable the submit button when all fields are filled", () => {
    render(<Login />);

    const passwordEl = screen.getByTestId("username-field");
    const userNameEl = screen.getByTestId("password-field");
    const submitBtnEl = screen.getByTestId("submit-btn");

    const testValue = "Muntashir";

    expect(submitBtnEl.disabled).toBeTruthy();

    // After changing the value of the fields

    fireEvent.change(passwordEl, { target: { value: testValue } });
    fireEvent.change(userNameEl, { target: { value: testValue } });

    expect(submitBtnEl.disabled).toBeFalsy();
  });
});
