import React from "react";
import { Link } from "react-router-dom";

function DateNavigationBox({ date }) {
  function generateUrlPrevMonth(date) {
    return `/timesheet/${(date.getMonth() == 0? `${(date.getFullYear() -1)}/12`: `${date.getFullYear()}/${date.getMonth()}`)}`
  }
  function generateUrlNextMonth(date) {
    return `/timesheet/${(date.getMonth() == 11? `${(date.getFullYear() + 1)}/1`: `${date.getFullYear()}/${date.getMonth() + 2}`)}`
  }
  return (
    <div className="grey-box-wrap">
      <div className="top">
        <Link to={generateUrlPrevMonth(date)} className="prev">
          <i className="zmdi zmdi-chevron-left"></i>previous month
        </Link>
        <span className="center">
          {date.toLocaleDateString("default", { month: "long" })},{" "}
          {date.getFullYear()}
        </span>
        <Link to={generateUrlNextMonth(date)} className="next">
          next month<i className="zmdi zmdi-chevron-right"></i>
        </Link>
      </div>
      <div className="bottom"></div>
    </div>
  );
}

export default DateNavigationBox;
