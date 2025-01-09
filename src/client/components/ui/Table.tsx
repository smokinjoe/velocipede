type TableProps = {
  data: Record<
    string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    string | number | boolean | null | Record<string, any>
  >[];
  columnNames?: Record<string, string>;
};

const TableHeader = ({ keys }: { keys: string[] }) => {
  return (
    <thead>
      <tr>
        {keys.map((key) => (
          <th key={key} className="border px-4 py-2">
            {key}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const TableRow = ({
  data,
  keys,
}: {
  data: Record<
    string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    string | number | boolean | null | Record<string, any>
  >;
  keys: string[];
}) => {
  const handleValue = (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: string | number | boolean | null | Record<string, any>
  ) => {
    if (typeof value === "object" || typeof value === "boolean") {
      return JSON.stringify(value, null, 2);
    }
    return value;
  };

  const body = keys.map((key: string, index: number) => {
    return (
      <td key={`${key}-${index}`} className="border px-4 py-2">
        {handleValue(data[key])}
      </td>
    );
  });
  return body;
};

export const Table = ({ data, columnNames }: TableProps) => {
  const tableHeaderKeys = columnNames
    ? Object.keys(data[0]).map((key) => columnNames[key])
    : Object.keys(data[0]);

  return (
    <table className="table-auto">
      <TableHeader keys={tableHeaderKeys} />
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <TableRow data={row} keys={Object.keys(data[0])} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
