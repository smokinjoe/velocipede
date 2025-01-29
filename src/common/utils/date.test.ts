import { formatDateStringToMMDDYYYY, formatMsToMMDDYYY } from "./date";

test("formatMsToMMDDYYY", () => {
  expect(formatMsToMMDDYYY(1617312000)).toBe("04/01/2021");
});

test("formatDateStringToMMDDYYYY", () => {
  expect(formatDateStringToMMDDYYYY("2021-04-01T14:36:10.843000")).toBe(
    "04/01/2021"
  );
});
