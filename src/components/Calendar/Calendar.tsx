import React, { useState, useMemo } from "react";
import dayjs from "dayjs";

import { Date } from "./utils";
import Header from "./Header";
import DateCell from "./DateCell";
import style from "./style.module.scss";
import { WEEKDAYS, INITIAL_OFFSET } from "./constants";

interface Props {}

const Calendar: React.FC<Props> = () => {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs>(Date.now);
  const [dayOffset, setDayOffset] = useState<number>(INITIAL_OFFSET);

  const month = useMemo(
    (): string => Date.formatMonth(selectedDate),
    [selectedDate]
  );
  const year = useMemo(
    (): string => Date.formatYear(selectedDate),
    [selectedDate]
  );

  const handlePreviousWeek = (): void => {
    setDayOffset((dayOffset) => dayOffset - 7);
    setSelectedDate((selectedDate) => selectedDate.subtract(7, "day"));
  };

  const handleNextWeek = (): void => {
    setDayOffset((dayOffset) => dayOffset + 7);
    setSelectedDate((selectedDate) => selectedDate.add(7, "day"));
  };

  const handleGoToday = (): void => {
    setSelectedDate(Date.now);
    setDayOffset(INITIAL_OFFSET);
  };

  const Weekdays: React.FC = () => {
    const today = Date.getToday();

    return (
      <div className={style.datesWrapper}>
        {WEEKDAYS.map((day, index) => {
          const dayAsNumber = Date.getDay(dayOffset + index);
          const fullDate = Date.getFullDate(dayOffset + index);

          return (
            <DateCell
              key={day}
              day={day}
              date={dayAsNumber}
              isActive={fullDate === today}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className={style.calendarWrapper}>
      <Header
        onToday={handleGoToday}
        onNext={handleNextWeek}
        onPrevious={handlePreviousWeek}
      >
        <h1 className={style.title}>
          <span className={style.year}>{year}</span>
          {month}
        </h1>
      </Header>
      <Weekdays />
    </div>
  );
};

export default Calendar;
