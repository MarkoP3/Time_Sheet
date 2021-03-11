import React from "react";
import { days } from "../../../../Helper/Helper";
import DayCell from "./DayCell/DayCell";

function Days({ date, startingDate }) {
  return (
    <div class="bottom">
      <ul class="days">
        {days.map((value, index) => {
          let cellDate = new Date(startingDate);
          startingDate = new Date(
            new Date(startingDate).setDate(startingDate.getDate() + 1)
          );

          return (
            <DayCell
              date={cellDate}
              active={cellDate.getTime() === date.getTime() ? "active" : ""}
            ></DayCell>
          );
        })}
      </ul>
    </div>
  );
}

export default Days;
