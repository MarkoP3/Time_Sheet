import React from "react";
import Days from "./Days/Days";
import WeekNavigation from "./WeekNavigation/WeekNavigation";

function WeekNavigationBox({ date, changeDate }) {
  console.log(date + "WeekNavBox.js");
  var days = [
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY",
    "SUNDAY",
  ];
  let startingDate = new Date(
    new Date(date).setDate(
      date.getDate() - ((date.getDay() == 0 ? 7 : date.getDay()) - 1)
    )
  );
  let endingDate = new Date(new Date(date).setDate(startingDate.getDate() + 6));
  function getWeek(date) {
    var onejan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date - onejan) / 86400000 + onejan.getDay()) / 7);
  }
  console.log(date);
  return (
    <div class="grey-box-wrap">
      <WeekNavigation
        startingDate={startingDate}
        date={date}
        endingDate={endingDate}
        week={getWeek(date) - 1}
        changeDate={changeDate}
      ></WeekNavigation>
      <Days
        days={days}
        date={date}
        startingDate={startingDate}
        changeDate={changeDate}
      ></Days>
    </div>
  );
}

export default WeekNavigationBox;
