import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Table } from "./Table";

describe("Table", () => {
  test("that a table renders", () => {
    const data = [
      {
        id: 1,
        name: "John Doe",
        email: "email@email.com",
      },
    ];

    render(<Table data={data} />);
    expect(screen.getByTestId("table")).toBeInTheDocument();
    expect(screen.getAllByTestId("table-row")).toHaveLength(1);
  });

  test("that a table renders with custom column names", () => {
    const data = [
      {
        id: 1,
        name: "John Doe",
        email: "email@email.com",
      },
    ];

    const customColumnNames = {
      name: "Full Name",
    };

    render(<Table data={data} columnNames={customColumnNames} />);

    expect(screen.getByText("Full Name")).toBeInTheDocument();
  });

  test("that a table renders with custom cell overrides", () => {
    const data = [
      {
        id: 1,
        name: "John Doe",
        email: "email@email.com",
      },
    ];

    const customCellOverrides = {
      email: (value: string) => (
        <a data-testid="email-override" href={`mailto:${value}`}>
          {value}
        </a>
      ),
    };

    render(<Table data={data} cellOverrides={customCellOverrides} />);

    expect(screen.getByTestId("email-override")).toBeInTheDocument();
  });
});
