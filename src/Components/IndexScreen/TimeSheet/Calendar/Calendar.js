import React from "react";
import { toPreviousMondayDays, numOfWeeksFromTo } from "../../../Helper/Helper";
import Cell from "./Cell/Cell";
import Header from "./Header/Header";
import MobileHeader from "./MobileHeader/MobileHeader";
function Calendar({ date }) {
  var rows = [1, 2, 3, 4, 5, 6];
  var cols = [1, 2, 3, 4, 5, 6, 7];
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  let startingDate = new Date(
    new Date(date).setDate(date.getDate() - toPreviousMondayDays(date))
  );
  rows.length = numOfWeeksFromTo(startingDate, lastDay);
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
