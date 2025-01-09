type DataListProps = {
  data: Record<string, string | number>;
  rowTitles?: Record<string, string>;
};

export const DataList = ({ data, rowTitles }: DataListProps) => {
  const propertyKeys = Object.keys(data);

  const getName = (key: string) => {
    return rowTitles ? rowTitles[key] : key;
  };

  return (
    <div className="col-span-12 grid grid-cols-12  bg-gray-100 border border-gray-800 rounded-xl">
      {propertyKeys.map((key, index) => {
        return (
          <div
            className={`col-span-12 grid grid-cols-12 ${
              index === 0 ? "" : "border-t"
            } border-slate-800 px-5 py-5`}
          >
            <div key={index} className="col-span-3">
              <div className="text-xl font-bold">{getName(key)}</div>
            </div>
            <div className="col-span-9">
              {JSON.stringify(data[key], null, 2)}
            </div>
          </div>
        );
      })}
    </div>
  );
};
