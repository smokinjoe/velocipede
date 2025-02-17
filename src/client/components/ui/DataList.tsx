type DataListProps = {
  data: Record<string, string | number | boolean | Array<string | number>>;
  rowTitles?: Record<string, string>;
  columns?: number;
  span?: number;
  titleWidth?: number;
  definitionWidth?: number;
  title?: string;
};

export const DataList = ({
  data,
  rowTitles,
  columns = 12,
  span = 12,
  titleWidth = 3,
  definitionWidth = 9,
  title,
}: DataListProps) => {
  const propertyKeys = Object.keys(data);

  const getName = (key: string) => {
    return rowTitles && rowTitles[key] ? rowTitles[key] : key;
  };

  return (
    <div
      className={`col-span-${span} bg-gray-100 border border-gray-800 rounded-lg overflow-hidden`}
    >
      {title ? (
        <div
          className={`col-span-${span} text-2xl font-bold px-5 py-5 border-b border-gray-800 bg-gray-400`}
        >
          {title}
        </div>
      ) : null}
      {propertyKeys.map((key, index) => {
        return (
          <div
            className={`grid grid-cols-${columns} ${
              index === 0 ? "" : "border-t"
            } border-gray-800 px-5 py-5 hover:bg-gray-200`}
            key={key}
          >
            <div className={`col-span-${titleWidth}`}>
              <div className="text-xl font-bold capitalize">{getName(key)}</div>
            </div>
            <div className={`col-span-${definitionWidth} text-xl`}>
              {data[key]}
            </div>
          </div>
        );
      })}
    </div>
  );
};
