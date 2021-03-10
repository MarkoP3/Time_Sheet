import React from "react";

function ReportHeader() {
  return (
    <tr>
      <th>Date</th>
      <th>Team member</th>
      <th>Projects</th>
      <th>Categories</th>
      <th>Description</th>
      <th className="small">Time</th>
    </tr>
  );
}

export default ReportHeader;
