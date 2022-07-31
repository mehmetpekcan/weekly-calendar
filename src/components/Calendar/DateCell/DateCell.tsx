import React from "react";
import classNames from "classnames";

import style from "./style.module.scss";

interface Props {
  date: string;
  day: string;
  isActive: boolean;
}

const DateCell: React.FC<Props> = ({ day, date, isActive = false }) => {
  return (
    <div className={classNames(style.date, isActive && style.active)} key={day}>
      <p className={style.dateText}>{day}</p>
      <p className={style.dateNumber}>{date}</p>
    </div>
  );
};

export default DateCell;
