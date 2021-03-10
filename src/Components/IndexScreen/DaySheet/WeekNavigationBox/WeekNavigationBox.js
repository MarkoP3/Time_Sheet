import React from "react";
import DayCell from "./Days/DayCell/DayCell";
import Days from "./Days/Days";
import WeekNavigation from "./WeekNavigation/WeekNavigation";

function WeekNavigationBox({ date,changeDate }) {
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
    new Date(date).setDate(date.getDate() - (date.getDay() - 1))
  );
  let endingDate = new Date(new Date(date).setDate(startingDate.getDate() + 6));
  function getWeek(date) {
    var onejan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date - onejan) / 86400000 + onejan.getDay()) / 7);
  }
  return (
    <div class="grey-box-wrap">
      <WeekNavigation startingDate={startingDate} endingDate={endingDate} week={getWeek(date)-1} changeDate={changeDate}></WeekNavigation>
      <Days days={days} startingDate={startingDate}></Days>
    </div>
  );
}

export default WeekNavigationBox;
