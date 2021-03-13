import React from "react";
import { Link } from "react-router-dom";
import { generateDaysUrl } from "../../../../../Helper/Helper";

function Hour({ hours, date }) {
  
  return (
    <div className="hours">
      <Link
        to={generateDaysUrl(date)}
        class="prev"
      >Hours: <span>{hours}</span></Link>
    </div>
  );
}

export default Hour;
