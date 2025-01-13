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
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr className="bg-gray-700 text-white">
        {keys.map((key) => (
          <th key={key} className="px-6 py-3">
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
      <td key={`${key}-${index}`} className="px-6 py-4">
        {handleValue(data[key])}
      </td>
    );
  });
  return body;
};

export const Table = ({ data, columnNames }: TableProps) => {
  // TODO: Refactor this a little more, it's pretty confusing to understand
  const tableHeaderKeys = Object.keys(data[0]).map((key) =>
    columnNames && columnNames[key] ? columnNames[key] : key
  );

  /**
   * Removed table-auto class from table
   */

  return (
    <div className="relative shadow-lg rounded-lg flex flex-col overflow-hidden">
      <table className="text-gray-500 dark:text-gray-400 shadow-mx text-left ">
        <TableHeader keys={tableHeaderKeys} />
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              <TableRow data={row} keys={Object.keys(data[0])} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
