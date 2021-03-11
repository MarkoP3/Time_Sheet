import React from "react";
import { Link } from "react-router-dom";
import {generateUrlNextMonth,generateUrlPrevMonth} from '../../../Helper/Helper'

function DateNavigationBox({ date }) {
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
