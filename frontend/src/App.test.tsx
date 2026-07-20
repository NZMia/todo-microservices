import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders application title", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /to-do list application/i })
    ).toBeInTheDocument();
  });

  test("renders frontend subtitle", () => {
    render(<App />);

    expect(
      screen.getByText(/frontend service running in react \+ typescript/i)
    ).toBeInTheDocument();
  });

  test("renders all todo items", () => {
    render(<App />);

    expect(screen.getByText(/create frontend dockerfile/i)).toBeInTheDocument();
    expect(screen.getByText(/create backend api/i)).toBeInTheDocument();
    expect(screen.getByText(/deploy services to aws ecs/i)).toBeInTheDocument();
  });
});
