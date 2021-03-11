import React from "react";
import {Link} from 'react-router-dom';
function generateDaysUrl(date)
{
  return `/timesheet/days/${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
}
function DayCell({ date, active }) {
  return (
    <li className={active}>
      <Link to={generateDaysUrl(date)}>
        <b>
          {date.toLocaleString("default", { month: "short" })}{" "}
          {date.toLocaleString("default", { day: "numeric" })}{" "}
        </b>

        <span>{date.toLocaleString("default", { weekday: "long" })}</span>
      </Link>
    </li>
  );
}

export default DayCell;
