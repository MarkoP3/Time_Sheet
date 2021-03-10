import React from "react";
import ReportHeader from "./ReportHeader/ReportHeader";
import ReportRow from "./ReportRow/ReportRow";

function ReportTable() {
  return (
    <table className="default-table">
      <tbody>
        <ReportHeader></ReportHeader>
        <ReportRow></ReportRow>
      </tbody>
    </table>
  );
}

export default ReportTable;
