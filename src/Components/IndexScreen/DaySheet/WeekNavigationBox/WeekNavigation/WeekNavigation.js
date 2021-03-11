import React from "react";
import { Link } from "react-router-dom";
import {
  generateDaysUrl,
  getWeekOfDates,
  getYearOfDates,
  nextWeek,
  prevWeek,
} from "../../../../Helper/Helper";

function WeekNavigation({ startingDate, date, endingDate }) {
  return (
    <div class="top">
      <Link to={generateDaysUrl(prevWeek(date))} class="prev">
        <i class="zmdi zmdi-chevron-left"></i>previous week
      </Link>
      <span class="center">
        {startingDate.toLocaleDateString("default", { month: "long" })}{" "}
        {startingDate.toLocaleDateString("default", { day: "2-digit" })} -{" "}
        {endingDate.toLocaleDateString("default", { month: "long" })}{" "}
        {endingDate.toLocaleDateString("default", { day: "2-digit" })},{" "}
        {getYearOfDates(startingDate, endingDate)} (week{" "}
        {getWeekOfDates(startingDate, endingDate)})
      </span>
      <Link to={generateDaysUrl(nextWeek(date))} class="next">
        next week<i class="zmdi zmdi-chevron-right"></i>
      </Link>
    </div>
  );
}

export default WeekNavigation;
