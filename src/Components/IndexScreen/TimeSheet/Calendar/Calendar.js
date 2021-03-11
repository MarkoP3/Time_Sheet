import React from "react";
import Cell from "./Cell/Cell";
import Header from "./Header/Header";
import MobileHeader from "./MobileHeader/MobileHeader";

let milisecondsPerDay = 86400000;
let daysInWeek = 7;
function toPreviousMondayDays(date) {
  return (date.getDay() == 0 ? daysInWeek : date.getDay()) - 1;
}
function Calendar({ date }) {
  var rows = [1, 2, 3, 4, 5, 6];
  var cols = [1, 2, 3, 4, 5, 6, 7];
  let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  let startingDate = new Date(
    firstDay.setDate(firstDay.getDate() - toPreviousMondayDays(firstDay))
  );
  const diffDays = Math.ceil(
    Math.abs(startingDate - lastDay) / milisecondsPerDay
  );
  rows.length = Math.ceil(diffDays / daysInWeek);
  return (
    <table className="month-table">
      <tbody>
        <Header></Header>
        <MobileHeader></MobileHeader>
        {rows.map((rowVal, index) => {
          return (
            <tr>
              {cols.map((colVal, index) => {
                let cellDate = new Date(startingDate);
                startingDate = new Date(
                  startingDate.setDate(startingDate.getDate() + 1)
                );
                return <Cell date={cellDate} hours="5"></Cell>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Calendar;
