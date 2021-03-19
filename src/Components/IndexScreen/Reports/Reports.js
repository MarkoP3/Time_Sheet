import React from "react";
import Title from "../../Common/Title/Title";
import TotalBar from "../../Common/TotalBar/TotalBar";
import ExportButtons from "./ExportButtons/ExportButtons";
import ReportFilterField from "./ReportFilterField/ReportFilterField";
import ReportTable from "./ReportTable/ReportTable";

function Reports({
  total,
  clients,
  teamMembers,
  timesheet,
  projects,
  categories,
  clientSelectionHandler,
}) {
  return (
    <div className="wrapper">
      <section className="content">
        <Title title="Reports"></Title>
        <ReportFilterField
          clients={clients}
          projects={projects}
          categories={categories}
          teamMembers={teamMembers}
          clientSelectionHandler={clientSelectionHandler}
        ></ReportFilterField>
        <ReportTable timesheet={timesheet}></ReportTable>
        <TotalBar total={total} text="Report total"></TotalBar>
        <ExportButtons></ExportButtons>
      </section>
    </div>
  );
}

export default Reports;
