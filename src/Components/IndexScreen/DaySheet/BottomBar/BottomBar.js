import React from "react";
import { NavLink } from "react-router-dom";

function BottomBar({ totalHours }) {
  return (
    <div class="total">
      <NavLink to="/timesheet">
        <i></i>back to monthly view
      </NavLink>
      <span>
        Total hours: <em>{totalHours}</em>
      </span>
    </div>
  );
}

export default BottomBar;
