import React from "react";

function DateNavigationBox({ year, month, changeMonth }) {
  return (
    <div className="grey-box-wrap">
      <div className="top">
        <a
          href="javascript:;"
          className="prev"
          onClick={(e) => changeMonth(-1)}
        >
          <i className="zmdi zmdi-chevron-left"></i>previous month
        </a>
        <span className="center">
          {month}, {year}
        </span>
        <a href="javascript:;" className="next" onClick={(e) => changeMonth(1)}>
          next month<i className="zmdi zmdi-chevron-right"></i>
        </a>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default DateNavigationBox;
