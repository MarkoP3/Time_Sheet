import React from "react";
import { useParams } from "react-router-dom";
import Title from "../../Common/Title/Title";
import TotalBar from "../../Common/TotalBar/TotalBar";
import BottomBar from "./BottomBar/BottomBar";
import HoursTable from "./HoursTable/HoursTable";
import WeekNavigationBox from "./WeekNavigationBox/WeekNavigationBox";
function DaySheet({ date }) {
  let { year, month, day } = useParams();
  let newDate = new Date(year, month-1, day);
  return (
    <div className="wrapper">
      <section className="content">
        <Title title="Time Sheet"></Title>
        <WeekNavigationBox date={newDate}></WeekNavigationBox>
        <HoursTable></HoursTable>
        <TotalBar total="7.5" text="Total hours" isDailySheet={true}></TotalBar>
      </section>
    </div>
  );
}

export default DaySheet;
