import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import { WorkoutsSummary } from "./WorkoutsSummary";

const renderWithRouter = (component: JSX.Element) => {
  return {
    ...render(<BrowserRouter>{component}</BrowserRouter>),
  };
};

const workoutsData = {
  "2025-02": 4,
  "2025-01": 29,
  "2024-12": 19,
  "2024-11": 15,
  "2024-10": 28,
};

describe("WorkoutsSummary", () => {
  test("should render", () => {
    renderWithRouter(<WorkoutsSummary summary={workoutsData} />);
    expect(screen.getByText("Monthly Summary")).toBeInTheDocument();
  });

  test("should render the correct number of rows", () => {
    renderWithRouter(<WorkoutsSummary summary={workoutsData} />);
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(6);
  });
});
