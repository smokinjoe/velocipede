import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { DataList } from "./DataList";

test("DataList should render", () => {
  render(<DataList data={{}} />);
  expect(screen.getByTestId("data-list")).toBeInTheDocument();
});

test("DataList should render title", () => {
  render(<DataList data={{}} title="Test Title" />);
  expect(screen.getByText("Test Title")).toBeInTheDocument();
});

test("DataList should render rowTitles", () => {
  render(<DataList data={{ key: "value" }} rowTitles={{ key: "Key" }} />);
  expect(screen.getByText("Key")).toBeInTheDocument();
});
