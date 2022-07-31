import dayjs from "dayjs";
import weekday from "dayjs/plugin/weekday";
import weekOfYear from "dayjs/plugin/weekOfYear";

import { Format } from "./constants";

const Date = (() => {
  dayjs.extend(weekday);
  dayjs.extend(weekOfYear);

  const now: dayjs.Dayjs = dayjs();

  const getDay = (index: number): string => now.day(index).format(Format.DAY);
  const getFullDate = (index: number): string =>
    now.day(index).format(`${Format.DAY}-${Format.MONTH}-${Format.YEAR}`);
  const getToday = (): string => getFullDate(0);

  const formatYear = (date: dayjs.Dayjs) => dayjs(date).format(Format.YEAR);
  const formatMonth = (date: dayjs.Dayjs) => dayjs(date).format(Format.MONTH);

  return { now, formatYear, getFullDate, getToday, getDay, formatMonth };
})();

export { Date };
