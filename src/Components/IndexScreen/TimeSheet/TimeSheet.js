import React, { useState } from "react";
import Title from "../../Common/Title/Title";
import Calendar from "./Calendar/Calendar";
import DateNavigationBox from "./DateNavigationBox/DateNavigationBox";
import TotalBar from "../../Common/TotalBar/TotalBar";

function TimeSheet({
  date,
  totalHours,
  startingDate,
  lastDay,
  times,
  hoursPerDay,
}) {
  console.log(`startingDate`, startingDate);
  console.log(`lastDay`, lastDay);
  return (
    <div className="wrapper">
      <section className="content">
        <Title title="Time Sheet"></Title>
        <DateNavigationBox date={date}></DateNavigationBox>
        <Calendar
          startingDate={startingDate}
          lastDay={lastDay}
          times={times}
          hoursPerDay={hoursPerDay}
          date={date}
        ></Calendar>
        <TotalBar total={totalHours} text="Total hours"></TotalBar>
      </section>
    </div>
  );
}

export default TimeSheet;
