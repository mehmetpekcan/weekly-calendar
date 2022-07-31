import classNames from "classnames";

import LeftChevron from "assets/icons/left-chevron.svg";
import RightChevron from "assets/icons/right-chevron.svg";

import style from "./style.module.scss";

interface Props {
  children: React.ReactNode;
  onPrevious: () => void;
  onToday: () => void;
  onNext: () => void;
}

const Header: React.FC<Props> = ({ children, onPrevious, onToday, onNext }) => {
  return (
    <div className={style.headerWrapper}>
      {children}
      <div className={style.actionButton}>
        <button aria-label="Go to previous week button" onClick={onPrevious}>
          <img src={LeftChevron} aria-label="hidden" />
        </button>
      </div>
      <div className={classNames(style.actionButton, style.todayButton)}>
        <button aria-label="Go to today" onClick={onToday}>
          Today
        </button>
      </div>
      <div className={style.actionButton}>
        <button aria-label="Go to next week button" onClick={onNext}>
          <img src={RightChevron} aria-label="hidden" />
        </button>
      </div>
    </div>
  );
};

export default Header;
