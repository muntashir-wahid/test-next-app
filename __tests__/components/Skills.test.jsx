import Skills from "@/components/Skills";
import { render, screen, logRoles } from "@testing-library/react";

const skills = [
  { name: "React.js", id: "react.js" },
  { name: "Next.js", id: "next.js" },
  { name: "Node.js", id: "node.js" },
];

describe("Skills component", () => {
  test("Should be rendered", () => {
    render(<Skills skills={skills} />);

    const listEl = screen.getByRole("list");
    expect(listEl).toBeInTheDocument();

    const skillsEl = screen.getAllByRole("listitem");
    expect(skillsEl[0]).toBeInTheDocument();
    expect(skillsEl).toHaveLength(skills.length);
  });

  test("login button renders", () => {
    render(<Skills skills={skills} />);

    const loginBtnEl = screen.getByRole("button", { name: "Login" });
    expect(loginBtnEl).toBeInTheDocument();
  });

  test("start learning button don't render", () => {
    render(<Skills skills={skills} />);

    const startLearningBtn = screen.queryByRole("button", {
      name: "Start Learning",
    });
    expect(startLearningBtn).not.toBeInTheDocument();
  });

  test("start learning is present after few second", async () => {
    const view = render(<Skills skills={skills} />);

    logRoles(view.container);

    const startLearningBtn = await screen.findByRole("button", {
      name: "Start Learning",
    });

    expect(startLearningBtn).toBeInTheDocument();
  });
});
