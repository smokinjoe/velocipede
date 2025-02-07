import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { renderWithRouter } from "@/client/utils/testHelpers";
import { WorkoutsTable } from "./WorkoutsTable";

const workoutsData = [
  {
    id: "1",
    createdAt: "2021-01-01",
    isTotalWorkPersonalRecord: true,
    isOutdoor: true,
    name: "Workout 1",
    status: "Complete",
    totalWork: 100,
    fitnessDiscipline: "Cycling",
    workoutType: "Low Impact",
  },
  {
    id: "2",
    createdAt: "2021-01-02",
    isTotalWorkPersonalRecord: false,
    isOutdoor: false,
    name: "Workout 2",
    status: "Complete",
    totalWork: 200,
    fitnessDiscipline: "Running",
    workoutType: "High Impact",
  },
];

describe("WorkoutsTable", () => {
  test("should render", () => {
    renderWithRouter(<WorkoutsTable workoutsData={workoutsData} />);
    expect(screen.getByTestId("workouts-table")).toBeInTheDocument();
  });

  test("should render the correct number of rows", () => {
    renderWithRouter(<WorkoutsTable workoutsData={workoutsData} />);
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(workoutsData.length + 1);
  });
});
