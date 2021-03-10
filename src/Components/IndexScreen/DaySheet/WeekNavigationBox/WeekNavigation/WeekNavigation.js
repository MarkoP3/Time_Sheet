import React from "react";

function WeekNavigation({startingDate,endingDate,week,changeDate}) {
  return (
    <div class="top">
      <a href="javascript:;" class="prev">
        <i class="zmdi zmdi-chevron-left"></i>previous week
      </a>
      <span class="center">
        {startingDate.toLocaleDateString("default", { month: "long" })}{" "}
        {startingDate.toLocaleDateString("default", { day: "2-digit" })} -{" "}
        {endingDate.toLocaleDateString("default", { month: "long" })}{" "}
        {endingDate.toLocaleDateString("default", { day: "2-digit" })},{" "}
        {endingDate.getFullYear()} (week {week})
      </span>
      <a href="javascript:;" class="next">
        next week<i class="zmdi zmdi-chevron-right"></i>
      </a>
    </div>
  );
}

export default WeekNavigation;
