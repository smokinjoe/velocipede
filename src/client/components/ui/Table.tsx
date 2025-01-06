type TableProps = {
  data: Record<string, string | number>[];
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
  data: Record<string, string | number>;
  keys: string[];
}) => {
  const body = keys.map((key, index) => {
    return (
      <td key={`${key}-${index}`} className="border px-4 py-2">
        {JSON.stringify(data[key], null, 2)}
      </td>
    );
  });
  return body;
};

export const Table = ({ data }: TableProps) => {
  const tableHeaderKeys = Object.keys(data[0]);

  return (
    <table className="table-auto">
      <TableHeader keys={tableHeaderKeys} />
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <TableRow data={row} keys={tableHeaderKeys} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};
