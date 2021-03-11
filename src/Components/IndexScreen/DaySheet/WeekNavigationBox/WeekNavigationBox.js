import React from "react";
import { daysInWeek } from "../../../Helper/Helper";
import Days from "./Days/Days";
import WeekNavigation from "./WeekNavigation/WeekNavigation";
function WeekNavigationBox({ date }) {
  let startingDate = new Date(
    new Date(date).setDate(
      date.getDate() - ((date.getDay() == 0 ? daysInWeek : date.getDay()) - 1)
    )
  );
  let endingDate = new Date(new Date(startingDate).setDate(startingDate.getDate() + (daysInWeek-1)));
  return (
    <div class="grey-box-wrap">
      <WeekNavigation
        startingDate={startingDate}
        date={date}
        endingDate={endingDate}
      ></WeekNavigation>
      <Days
        date={date}
        startingDate={startingDate}
      ></Days>
    </div>
  );
}

export default WeekNavigationBox;
