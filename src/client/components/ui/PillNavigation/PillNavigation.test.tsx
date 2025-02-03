import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import { PillNavigation } from "./PillNavigation";

const renderWithRouter = (component: JSX.Element) => {
  return {
    ...render(<BrowserRouter>{component}</BrowserRouter>),
  };
};

describe("PillNavigation", () => {
  test("should render", () => {
    const props = {
      views: ["View 1", "View 2"],
      selectedView: "View 1",
    };
    renderWithRouter(<PillNavigation {...props} />);
    expect(screen.getByText("View 1")).toBeInTheDocument();
    expect(screen.getByText("View 2")).toBeInTheDocument();
  });

  test("should render the correct view as active", () => {
    const props = {
      views: ["View 1", "View 2"],
      selectedView: "View 1",
    };
    renderWithRouter(<PillNavigation {...props} />);
    expect(screen.getByText("View 1")).toHaveClass("bg-blue-500");
    expect(screen.getByText("View 2")).not.toHaveClass("bg-blue-500");
  });
});
