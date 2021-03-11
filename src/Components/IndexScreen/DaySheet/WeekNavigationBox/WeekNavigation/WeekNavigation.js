import React from "react";
import { Link } from "react-router-dom";
function generateDaysUrl(date)
{
  return `/timesheet/days/${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()}`;
}
function WeekNavigation({ startingDate, date, endingDate, week }) {
  let nextWeek=new Date(new Date(date).setDate(date.getDate() + 7));
  let prevWeek=new Date(new Date(date).setDate(date.getDate() - 7));
  console.log(date+"date");
  console.log('prevWeek', prevWeek)
  return (
    <div class="top">
      <Link
        to={generateDaysUrl(prevWeek)}
        class="prev"
      >
        <i class="zmdi zmdi-chevron-left"></i>previous week
      </Link>
      <span class="center">
        {startingDate.toLocaleDateString("default", { month: "long" })}{" "}
        {startingDate.toLocaleDateString("default", { day: "2-digit" })} -{" "}
        {endingDate.toLocaleDateString("default", { month: "long" })}{" "}
        {endingDate.toLocaleDateString("default", { day: "2-digit" })},{" "}
        {endingDate.getFullYear()} (week {week})
      </span>
      <Link
        to={generateDaysUrl(nextWeek)}
        class="next"
      >
        next week<i class="zmdi zmdi-chevron-right"></i>
      </Link>
    </div>
  );
}

export default WeekNavigation;
