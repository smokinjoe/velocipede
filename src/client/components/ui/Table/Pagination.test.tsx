import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Pagination } from "./Pagination";
import * as usePagination from "./usePagination";

const mockPage = 0;
const mockSetPage = jest.fn();
const mockLimit = 20;
const mockSetLimit = jest.fn();

const usePaginationSpy = jest.spyOn(usePagination, "usePagination");

beforeEach(() => {
  usePaginationSpy.mockReturnValue({
    page: mockPage,
    setPage: mockSetPage,
    limit: mockLimit,
    setLimit: mockSetLimit,
  });
});

afterAll(() => {
  jest.clearAllMocks();
});

describe("Pagination", () => {
  const props = {
    showPrevious: false,
    showNext: false,
    total: 100,
    count: 10,
  };

  test("should render", () => {
    render(<Pagination {...props} />);
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });

  test("should render the correct range", () => {
    render(<Pagination {...props} />);
    const rangeElement = screen.getByTestId("range");
    const innerText = rangeElement.textContent;
    expect(innerText).toBe("Showing 1 to 10 of 100 Entries");
  });

  test("should call setLimit with the correct value", () => {
    render(<Pagination {...props} />);
    const input = screen.getByLabelText("Limit");
    const updateButton = screen.getByText("Update");

    const newLimit = 25;

    fireEvent.change(input, { target: { value: newLimit } });
    fireEvent.click(updateButton);

    expect(mockSetLimit).toHaveBeenCalledWith(newLimit);
  });

  test("should call setLimit with the correct value when the form is submitted", () => {
    render(<Pagination {...props} />);
    const input = screen.getByLabelText("Limit");
    const form = screen.getByTestId("limit-form");

    const newLimit = 25;

    fireEvent.change(input, { target: { value: newLimit } });
    fireEvent.submit(form);

    expect(mockSetLimit).toHaveBeenCalledWith(newLimit);
  });

  test("should reset the form limit", () => {
    render(<Pagination {...props} />);
    const input = screen.getByLabelText("Limit");
    const resetButton = screen.getByText("Reset");

    fireEvent.change(input, { target: { value: 25 } });
    fireEvent.click(resetButton);

    expect(mockSetLimit).toHaveBeenCalledWith(20);
    expect(input).toHaveValue("20");
  });

  test("next button is disabled when props.showNext is false", () => {
    render(<Pagination {...props} />);
    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeDisabled();
  });

  test("next button is enabled when props.showNext is true and when clicked increments page", () => {
    render(<Pagination {...props} showNext={true} />);
    const nextButton = screen.getByText("Next");
    expect(nextButton).toBeEnabled();

    fireEvent.click(nextButton);
    expect(mockSetPage).toHaveBeenCalledWith(mockPage + 1);
  });

  test("previous button is disabled when props.showPrevious is false", () => {
    render(<Pagination {...props} />);
    const previousButton = screen.getByText("Prev");
    expect(previousButton).toBeDisabled();
  });

  test("previous button is enabled when props.showPrevious is true and when clicked decrements page", () => {
    usePaginationSpy.mockReturnValue({
      page: 2,
      setPage: mockSetPage,
      limit: mockLimit,
      setLimit: mockSetLimit,
    });
    render(<Pagination {...props} showPrevious={true} />);
    const previousButton = screen.getByText("Prev");
    expect(previousButton).toBeEnabled();

    fireEvent.click(previousButton);
    expect(mockSetPage).toHaveBeenCalledWith(1);
  });
});
