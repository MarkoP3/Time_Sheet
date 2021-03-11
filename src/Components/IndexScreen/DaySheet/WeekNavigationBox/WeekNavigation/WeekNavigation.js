import React from "react";

function WeekNavigation({ startingDate, date, endingDate, week, changeDate }) {
  console.log(date + "WeekNavigation.js");
  return (
    <div class="top">
      <a
        href="javascript:;"
        class="prev"
        onClick={(e) => changeDate(new Date(date.setDate(date.getDate() - 7)))}
      >
        <i class="zmdi zmdi-chevron-left"></i>previous week
      </a>
      <span class="center">
        {startingDate.toLocaleDateString("default", { month: "long" })}{" "}
        {startingDate.toLocaleDateString("default", { day: "2-digit" })} -{" "}
        {endingDate.toLocaleDateString("default", { month: "long" })}{" "}
        {endingDate.toLocaleDateString("default", { day: "2-digit" })},{" "}
        {endingDate.getFullYear()} (week {week})
      </span>
      <a
        href="javascript:;"
        class="next"
        onClick={(e) => changeDate(new Date(date.setDate(date.getDate() + 7)))}
      >
        next week<i class="zmdi zmdi-chevron-right"></i>
      </a>
    </div>
  );
}

export default WeekNavigation;
