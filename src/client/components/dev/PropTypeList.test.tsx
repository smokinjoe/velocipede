import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { PropTypeList } from "./PropTypeList";

const consoleError = console.error;

beforeAll(() => {
  console.error = jest.fn();
});

afterAll(() => {
  console.error = consoleError;
});

// TEST: value types, string, number, boolean, array, object
describe("PropTypeList", () => {
  const props = {
    data: {
      stringKey: "string",
      numberKey: 1,
      booleanKey: true,
      arrayKey: [],
      objectKey: {},
    },
  };

  test("should render", () => {
    render(<PropTypeList {...props} />);
    expect(screen.getByText("string")).toBeInTheDocument();
    expect(screen.getByText("number")).toBeInTheDocument();
    expect(screen.getByText("boolean")).toBeInTheDocument();
    expect(screen.getByText("Array")).toBeInTheDocument();
    expect(screen.getByText("Object")).toBeInTheDocument();
  });
});
