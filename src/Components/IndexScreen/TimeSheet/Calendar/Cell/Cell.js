import React from "react";
import Date from "./Date/Date";
import Hour from "./Hour/Hour";

function Cell({ date, hours, style }) {
  return (
    <td className={style}>
      <Date date={date}></Date>
      <Hour hours={hours} date={date}></Hour>
    </td>
  );
}

export default Cell;
