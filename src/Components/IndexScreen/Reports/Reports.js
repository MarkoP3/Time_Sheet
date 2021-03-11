import React from "react";
import Title from "../../Common/Title/Title";
import TotalBar from "../../Common/TotalBar/TotalBar";
import ReportFilterField from "./ReportFilterField/ReportFilterField";
import ReportTable from "./ReportTable/ReportTable";

function Reports() {
  return (
    <div className="wrapper">
      <section className="content">
        <Title title="Reports"></Title>
        <ReportFilterField></ReportFilterField>
        <ReportTable></ReportTable>
        <TotalBar total="90" text="Report total"></TotalBar>
      </section>
    </div>
  );
}

export default Reports;
