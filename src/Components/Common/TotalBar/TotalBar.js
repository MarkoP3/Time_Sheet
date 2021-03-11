import React from "react";
import { NavLink } from "react-router-dom";

function TotalBar({ text, total, isDailySheet }) {
  function isDaily() {
    if (isDailySheet != undefined) {
      return (
        <NavLink to="/timesheet">
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
