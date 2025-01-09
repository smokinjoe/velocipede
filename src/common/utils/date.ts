export const formatDateToMMDDYYYY = (dateInSeconds: number): string => {
  const date = new Date(dateInSeconds * 1000);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();
  const parsedDate = `${month}/${day}/${year}`;
  return parsedDate;
};
