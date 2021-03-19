import React from "react";
import ReportHeader from "./ReportHeader/ReportHeader";
import ReportRow from "./ReportRow/ReportRow";

function ReportTable({ timesheet }) {
  return (
    <table className="default-table">
      <tbody>
        <ReportHeader></ReportHeader>
        {timesheet.map((timesheetitem) => {
          return <ReportRow timesheetItem={timesheetitem}></ReportRow>;
        })}
      </tbody>
    </table>
  );
}

export default ReportTable;
