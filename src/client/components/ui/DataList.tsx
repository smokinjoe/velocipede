type DataListProps = {
  data: Record<string, string | number>;
};

export const DataList = ({ data }: DataListProps) => {
  const propertyKeys = Object.keys(data);

  return (
    <>
      {propertyKeys.map((key, index) => {
        return (
          <>
            <div key={index} className="col-span-3">
              <div className="text-xl font-bold">{key}</div>
            </div>
            <div className="col-span-9">
              {JSON.stringify(data[key], null, 2)}
            </div>
          </>
        );
      })}
    </>
  );
};
