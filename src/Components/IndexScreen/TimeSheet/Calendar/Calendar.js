import React from "react";
import {
  toPreviousMondayDays,
  numOfWeeksFromTo,
  daysInWeek,
} from "../../../Helper/Helper";
import Cell from "./Cell/Cell";
import Header from "./Header/Header";
import MobileHeader from "./MobileHeader/MobileHeader";
function Calendar({ date }) {
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  let startingDate = new Date(
    new Date(date).setDate(date.getDate() - toPreviousMondayDays(date))
  );
  let cols = new Array(daysInWeek)
    .fill(undefined)
    .map((value, index) => (value = index));
  let rows = new Array(numOfWeeksFromTo(startingDate, lastDay))
    .fill(undefined)
    .map((value, index) => (value = index));
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
