import React from "react";
import { NavLink } from "react-router-dom";

function TotalBar({ text, total, isDailySheet }) {
  function isDaily() {
    let url = window.location.pathname.split("/");
    if (isDailySheet != undefined) {
      return (
        <NavLink to={`/timesheet/${url[2]}/${url[3]}`}>
          <i></i>back to monthly view
        </NavLink>
      );
    }
  }
  return (
    <div class="total">
      {isDaily()}
      <span>
        {text}: <em>{total}</em>
      </span>
    </div>
  );
}

export default TotalBar;
