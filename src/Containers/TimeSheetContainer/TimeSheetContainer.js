import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toPreviousMondayDays } from "../../Components/Helper/Helper";
import TimeSheet from "../../Components/IndexScreen/TimeSheet/TimeSheet";
import teamMemberServices from "../../Services/TeamMemberServices/TeamMemberServices";
import timeSheetServices from "../../Services/TimeSheetServices/TimeSheetServices";

function TimeSheetContainer() {
  let { year, month } = useParams();
  let date = new Date(year, month - 1, 1);
  const [hoursPerDay, sethoursPerDay] = useState(7.5);
  const [totalHours, settotalHours] = useState(0);
  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  let startingDate = new Date(
    new Date(date).setDate(date.getDate() - toPreviousMondayDays(date))
  );
  const [times, settimes] = useState([]);
  useEffect(() => {
    /* teamMemberServices.getHoursPerDay().then((data) => {
      sethoursPerDay(data.data);
    });*/
    settimes([]);
    timeSheetServices
      .getMonthViewData(
        1,
        new Date(date).setDate(date.getDate() - toPreviousMondayDays(date)),
        lastDay
      )
      .then((data) => {
        settimes(data);
      })
      .catch((error) => console.log(`error`, error));
  }, [year, month]);
  useEffect(() => {
    settotalHours(times.reduce((accu, val) => accu + val.hours, 0));
  }, [times]);
  return (
    <TimeSheet
      date={date}
      lastDay={lastDay}
      startingDate={startingDate}
      totalHours={totalHours}
      hoursPerDay={hoursPerDay}
      times={times}
    ></TimeSheet>
  );
}

export default TimeSheetContainer;
