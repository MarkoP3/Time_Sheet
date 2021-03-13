import React from "react";
import {Link} from 'react-router-dom';
import { generateDaysUrl } from "../../../../../Helper/Helper";

function DayCell({ date, active }) {
  return (
    <li className={active}>
      <Link to={generateDaysUrl(date)}>
        <b>
          {date.toLocaleString("default", { month: "short" })}{" "}
          {date.toLocaleString("default", { day: "numeric" })}{" "}
        </b>

        <span>{date.toLocaleString("default", { weekday: "long" })}</span>
      </Link>
    </li>
  );
}

export default DayCell;
