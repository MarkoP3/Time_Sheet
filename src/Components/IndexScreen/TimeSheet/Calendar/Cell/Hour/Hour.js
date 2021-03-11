import React from "react";
import { NavLink } from "react-router-dom";

function Hour({ changeDate, hours, date }) {
  return (
    <div className="hours">
      <NavLink to="/timesheet/days" onClick={(e) => changeDate(date)}>
        Hours: <span>{hours}</span>
      </NavLink>
    </div>
  );
}

export default Hour;
