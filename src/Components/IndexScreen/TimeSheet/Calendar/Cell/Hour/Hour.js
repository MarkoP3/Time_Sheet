import React from "react";
import { Link } from "react-router-dom";
function generateDaysUrl(date)
{
  return `/timesheet/days/${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
}
function Hour({ hours, date }) {
  
  return (
    <div className="hours">
      <Link
        to={generateDaysUrl(date)}
        class="prev"
      >Hours: <span>{hours}</span></Link>
    </div>
  );
}

export default Hour;
