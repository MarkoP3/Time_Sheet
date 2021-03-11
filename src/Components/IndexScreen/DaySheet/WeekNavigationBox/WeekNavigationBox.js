import React from "react";
import Days from "./Days/Days";
import WeekNavigation from "./WeekNavigation/WeekNavigation";

let milisecondPerDay=86400000;
let daysPerWeek=7;
function WeekNavigationBox({ date }) {
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
      date.getDate() - ((date.getDay() == 0 ? daysPerWeek : date.getDay()) - 1)
    )
  );
  let endingDate = new Date(new Date(date).setDate(startingDate.getDate() + daysPerWeek-1));
  function getWeek(date) {
    var onejan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date - onejan) / milisecondPerDay + onejan.getDay()) / daysPerWeek);
  }
  return (
    <div class="grey-box-wrap">
      <WeekNavigation
        startingDate={startingDate}
        date={date}
        endingDate={endingDate}
        week={getWeek(date) - 1}
      ></WeekNavigation>
      <Days
        days={days}
        date={date}
        startingDate={startingDate}
      ></Days>
    </div>
  );
}

export default WeekNavigationBox;
