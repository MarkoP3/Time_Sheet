import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Title from "../../Common/Title/Title";
import Calendar from "./Calendar/Calendar";
import DateNavigationBox from "./DateNavigationBox/DateNavigationBox";
import TotalBar from "../../Common/TotalBar/TotalBar";

function TimeSheet() {
  let { year, month } = useParams();
  let newDate = new Date(year, month-1, 1);
  return (
    <div className="wrapper">
      <section className="content">
        <Title title="Time Sheet"></Title>
        <DateNavigationBox date={newDate}></DateNavigationBox>
        <Calendar date={newDate}></Calendar>
        <TotalBar total="90" text="Total hours"></TotalBar>
      </section>
    </div>
  );
}

export default TimeSheet;
