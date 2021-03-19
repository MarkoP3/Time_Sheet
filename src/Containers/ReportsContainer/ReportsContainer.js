import React, { useEffect, useState } from "react";
import Reports from "../../Components/IndexScreen/Reports/Reports";
import clientServices from "../../Services/ClientServices/ClientServices";
import projectSerivces from "../../Services/ProjectServices/ProjectServices";
import teamMemberServices from "../../Services/TeamMemberServices/TeamMemberServices";
import categoryServices from "../../Services/CategoryServices/CategoryServices";
import { useLocation } from "react-router-dom";
import timeSheetServices from "../../Services/TimeSheetServices/TimeSheetServices";

function ReportsContainer() {
  const filterParams = new URLSearchParams(useLocation().search);
  const [search, setsearch] = useState(false);
  const [filterClient, setfilterClient] = useState(
    filterParams.has("filterClient") ? filterParams.get("filterClient") : ""
  );
  const [filterTeamMember, setfilterTeamMember] = useState(
    filterParams.has("filterTeamMember")
      ? filterParams.get("filterTeamMember")
      : ""
  );
  const [filterProject, setfilterProject] = useState(
    filterParams.has("filterProject") ? filterParams.get("filterProject") : ""
  );
  const [filterCategory, setfilterCategory] = useState(
    filterParams.has("filterCategory") ? filterParams.get("filterCategory") : ""
  );
  const [startDate, setstartDate] = useState(
    filterParams.has("startDate") ? filterParams.get("startDate") : ""
  );
  const [endDate, setendDate] = useState(
    filterParams.has("endDate") ? filterParams.get("endDate") : ""
  );
  const [teamMembers, setteamMembers] = useState([]);
  const [clients, setclients] = useState([]);
  const [projects, setprojects] = useState([]);
  const [categories, setcategories] = useState([]);
  const [timesheet, settimesheet] = useState([]);
  const [total, settotal] = useState(0);
  useEffect(() => {
    setsearch(filterParams.has("search") ? filterParams.get("search") : false);
    setfilterClient(
      filterParams.has("filterClient") ? filterParams.get("filterClient") : ""
    );
    setfilterProject(
      filterParams.has("filterProject") ? filterParams.get("filterProject") : ""
    );
    setfilterTeamMember(
      filterParams.has("filterTeamMember")
        ? filterParams.get("filterTeamMember")
        : ""
    );
    setfilterCategory(
      filterParams.has("filterCategory")
        ? filterParams.get("filterCategory")
        : ""
    );
    setstartDate(
      filterParams.has("startDate") ? filterParams.get("startDate") : ""
    );
    setendDate(filterParams.has("endDate") ? filterParams.get("endDate") : "");
  }, [filterParams]);

  useEffect(() => {
    if (search)
      timeSheetServices
        .getIntervalTimeSheet(
          filterTeamMember,
          filterClient,
          filterProject,
          filterCategory,
          startDate,
          endDate
        )
        .then((data) => {
          settimesheet(data);
        });
    else {
      settimesheet([]);
    }
  }, [
    search,
    filterClient,
    filterProject,
    filterTeamMember,
    filterCategory,
    startDate,
    endDate,
  ]);
  useEffect(() => {
    settotal(timesheet.reduce((sum, value) => sum + value.time, 0));
  }, [timesheet]);
  useEffect(() => {
    clientServices.getAllClients().then((data) => {
      setclients(data);
    });
    teamMemberServices.getAllTeamMembers().then((data) => {
      setteamMembers(data);
    });
    projectSerivces.getAllProjects().then((data) => {
      setprojects(data);
    });
    categoryServices.getAllCategories().then((data) => {
      setcategories(data);
    });
  }, []);
  function clientSelectionHandler(clientID) {
    projectSerivces.getAllProjectsOfCustomer(clientID).then((data) => {
      setprojects(data);
    });
  }
  return (
    <Reports
      total={total}
      clients={clients}
      categories={categories}
      projects={projects}
      teamMembers={teamMembers}
      timesheet={timesheet}
      clientSelectionHandler={clientSelectionHandler}
    ></Reports>
  );
}

export default ReportsContainer;
