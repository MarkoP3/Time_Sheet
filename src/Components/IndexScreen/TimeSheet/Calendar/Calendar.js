import React, { useState, useEffect } from "react";
import teamMemberServices from "../../../../Services/TeamMemberServices/TeamMemberServices";
import timeSheetServices from "../../../../Services/TimeSheetServices/TimeSheetServices";
import {
  toPreviousMondayDays,
  numOfWeeksFromTo,
  daysInWeek,
} from "../../../Helper/Helper";
import Cell from "./Cell/Cell";
import Header from "./Header/Header";
import MobileHeader from "./MobileHeader/MobileHeader";
function Calendar({ date, startingDate, lastDay, times, hoursPerDay }) {
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
                console.log(cellDate.getMonth());
                if (
                  date.getMonth() > cellDate.getMonth() ||
                  date.getFullYear() > cellDate.getFullYear()
                )
                  return (
                    <Cell
                      style={`${
                        times.filter(
                          (el) =>
                            new Date(el.date).getTime() == cellDate.getTime()
                        ).length > 0
                          ? times.filter(
                              (el) =>
                                new Date(el.date).getTime() ==
                                cellDate.getTime()
                            )[0].hours <= hoursPerDay
                            ? "positive"
                            : "negative"
                          : ""
                      } previouse`}
                      date={cellDate}
                      hours={
                        times.filter(
                          (el) =>
                            new Date(el.date).getTime() == cellDate.getTime()
                        ).length > 0
                          ? times.filter(
                              (el) =>
                                new Date(el.date).getTime() ==
                                cellDate.getTime()
                            )[0].hours
                          : "0"
                      }
                    ></Cell>
                  );
                else if (date.getMonth() < cellDate.getMonth())
                  return (
                    <Cell
                      style={`${
                        times.filter(
                          (el) =>
                            new Date(el.date).getTime() == cellDate.getTime()
                        ).length > 0
                          ? times.filter(
                              (el) =>
                                new Date(el.date).getTime() ==
                                cellDate.getTime()
                            )[0].hours <= hoursPerDay
                            ? "positive"
                            : "negative"
                          : ""
                      } disable`}
                      date={cellDate}
                      hours={
                        times.filter(
                          (el) =>
                            new Date(el.date).getTime() == cellDate.getTime()
                        ).length > 0
                          ? times.filter(
                              (el) =>
                                new Date(el.date).getTime() ==
                                cellDate.getTime()
                            )[0].hours
                          : "0"
                      }
                    ></Cell>
                  );
                else
                  return (
                    <Cell
                      style={`${
                        times.filter(
                          (el) =>
                            new Date(el.date).getTime() == cellDate.getTime()
                        ).length > 0
                          ? times.filter(
                              (el) =>
                                new Date(el.date).getTime() ==
                                cellDate.getTime()
                            )[0].hours <= hoursPerDay
                            ? "positive"
                            : "negative"
                          : ""
                      }`}
                      date={cellDate}
                      hours={
                        times.filter(
                          (el) =>
                            new Date(el.date).getTime() == cellDate.getTime()
                        ).length > 0
                          ? times.filter(
                              (el) =>
                                new Date(el.date).getTime() ==
                                cellDate.getTime()
                            )[0].hours
                          : "0"
                      }
                    ></Cell>
                  );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Calendar;
