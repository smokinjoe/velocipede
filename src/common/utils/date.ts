const formatDateObject = (date: Date): string => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  const parsedDate = `${month}/${day}/${year}`;
  return parsedDate;
};

// rename to formatMsToMMDDYYY
export const formatDateToMMDDYYYY = (dateInSeconds: number): string => {
  const date = new Date(dateInSeconds * 1000);
  return formatDateObject(date);
};

export const formatDateStringToMMDDYYYY = (dateString: string): string => {
  const date = new Date(dateString);
  return formatDateObject(date);
};
