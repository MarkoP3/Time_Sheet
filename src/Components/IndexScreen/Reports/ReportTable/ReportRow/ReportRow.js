import React from "react";

function ReportRow({ timesheetItem }) {
  return (
    <tr>
      <td>{timesheetItem?.date}</td>
      <td>{timesheetItem?.teamMember}</td>
      <td>
        {timesheetItem?.project} - {timesheetItem?.client}
      </td>
      <td>{timesheetItem?.category}</td>
      <td>{timesheetItem?.description}</td>
      <td className="small">{timesheetItem?.time}</td>
    </tr>
  );
}

export default ReportRow;
