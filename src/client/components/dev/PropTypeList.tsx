type DataListProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
};

const parseValue = (value: string): boolean | number | string => {
  if (value === "") return "string";
  const numberValue = parseFloat(value);
  if (!isNaN(numberValue)) return typeof numberValue;
  try {
    if (value.toLowerCase() === "true") return typeof true;
    if (value.toLowerCase() === "false") return typeof false;
  } catch (error) {
    console.error(error);
  }
  if (Array.isArray(value)) return "Array";
  if (typeof value === "object") return "Object";
  return typeof value;
};

export const PropTypeList = ({ data }: DataListProps) => {
  const propertyKeys = Object.keys(data);

  return (
    <>
      {propertyKeys.map((key, index) => {
        const parsedValue = parseValue(data[key]);
        return (
          <>
            <div key={index} className="col-span-5">
              <div className="text-xl font-bold">{key}</div>
            </div>
            <div className="col-span-7">{parsedValue}</div>
          </>
        );
      })}
    </>
  );
};
