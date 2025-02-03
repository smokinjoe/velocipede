import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Pagination } from "./Pagination";
import * as usePagination from "./usePagination";

const mockPage = 1;
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

describe("Pagination", () => {
  const props = {
    showPrevious: false,
    showNext: false,
    total: 10,
    count: 1,
  };

  it("should render", () => {
    render(<Pagination {...props} />);
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });
});
