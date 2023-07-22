import { render } from "@testing-library/react";

import ToggleText from "@/components/ToggleText";

describe("test toggle text", () => {
  it("should render conditionally", () => {
    const { getByTestId, rerender } = render(<ToggleText showText={true} />);

    const showTextEl = getByTestId("show-text");

    expect(showTextEl).toBeInTheDocument();

    rerender(<ToggleText showText={false} />);

    expect(showTextEl).not.toBeInTheDocument();
  });
});
