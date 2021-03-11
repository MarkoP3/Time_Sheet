import React from "react";
import Title from "../../Common/Title/Title";
import TotalBar from "../../Common/TotalBar/TotalBar";
import BottomBar from "./BottomBar/BottomBar";
import HoursTable from "./HoursTable/HoursTable";
import WeekNavigationBox from "./WeekNavigationBox/WeekNavigationBox";
function DaySheet({ date, changeDate }) {
  return (
    <div className="wrapper">
      <section className="content">
        <Title title="Time Sheet"></Title>
        <WeekNavigationBox
          date={date}
          changeDate={changeDate}
        ></WeekNavigationBox>
        <HoursTable></HoursTable>
        <TotalBar total="7.5" text="Total hours" isDailySheet={true}></TotalBar>
      </section>
    </div>
  );
}

export default DaySheet;
