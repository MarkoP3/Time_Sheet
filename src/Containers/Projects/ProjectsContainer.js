import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import clientServices from "../../Services/ClientServices/ClientServices";
import { recordPerPage } from "../../Components/Helper/Helper";
import Projects from "../../Components/IndexScreen/Projects/Projects";
import projectServices from "../../Services/ProjectServices/ProjectServices";
import teamMemberServices from "../../Services/TeamMemberServices/TeamMemberServices";
import timeSheetServices from "../../Services/TimeSheetServices/TimeSheetServices";

function ProjectsContainer() {
  const history = useHistory();
  const filterParams = new URLSearchParams(useLocation().search);
  const [customers, setcustomers] = useState([]);
  const [leaders, setleaders] = useState([]);
  const [activeFilterLetter, setactiveFilterLetter] = useState(
    filterParams.has("firstLetter") ? filterParams.get("firstLetter") : ""
  );
  const [pageNumber, setpageNumber] = useState(
    filterParams.has("pageNumber") ? filterParams.get("pageNumber") - 1 : 0
  );

  const [filterProjectsText, setfilterProjectsText] = useState(
    filterParams.has("filterText") ? filterParams.get("filterText") : ""
  );
  let searchTimeout;
  function changeFilterProjectsText(text) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(
      () => history.push(`projects?filterText=${text}`),
      500
    );
  }

  const [numberOfPages, setNumberOfPages] = useState(0);

  const [projects, setprojects] = useState([]);
  const [containingProjectLetters, setcontainingProjectLetters] = useState([]);
  useEffect(() => {
    projectServices.getAllProjectsFirstLetters().then((data) => {
      setcontainingProjectLetters(data.data);
    });
    projectServices
      .getProjectsOnPage(
        pageNumber,
        activeFilterLetter,
        filterProjectsText,
        recordPerPage
      )
      .then((data) => {
        if (data.status == 204) setprojects([]);
        else setprojects(data.data);
      });
    projectServices
      .getProjectNumberOfPages(
        activeFilterLetter,
        filterProjectsText,
        recordPerPage
      )
      .then((data) => {
        setNumberOfPages(data);
      });
    clientServices.getAllClients().then((data) => {
      setcustomers(data.data);
    });
    teamMemberServices.getAllTeamMembers().then((data) => {
      setleaders(data.data);
    });
  }, []);
  function addProject(project) {
    projectServices
      .addProject(project)
      .then((result) => {
        return projectServices.getProjectsOnPage(
          pageNumber,
          activeFilterLetter,
          filterProjectsText,
          recordPerPage
        );
      })
      .then((data) => {
        setprojects(data.data);
        console.log("sucessfuly added a project");
      })
      .catch((error) => {
        console.log("Something wen't wrong try again");
      });
  }
  function deleteProject(projectID) {
    projectServices
      .deleteProject(projectID)
      .then((result) => {
        return projectServices.getProjectsOnPage(
          pageNumber,
          activeFilterLetter,
          filterProjectsText,
          recordPerPage
        );
      })
      .then((data) => {
        if (data.status == 204) setprojects([]);
        else setprojects(data.data);
        console.log("sucessfuly deleted a project");
      })
      .catch((error) => {
        console.log("Something wen't wrong try again");
      });
  }
  function updateProject(project) {
    projectServices
      .updateProject(project)
      .then((result) => {
        return projectServices.getProjectsOnPage(
          pageNumber,
          activeFilterLetter,
          filterProjectsText,
          recordPerPage
        );
      })
      .then((data) => {
        setprojects(data.data);
        console.log("sucessfuly updated a project");
      })
      .catch((error) => {
        console.log("Something wen't wrong try again");
      });
  }
  useEffect(() => {
    clientServices.getAllClients().then((data) => {
      setcustomers(data.data);
    });
    projectServices
      .getProjectNumberOfPages(
        activeFilterLetter,
        filterProjectsText,
        recordPerPage
      )
      .then((data) => {
        setNumberOfPages(data);
      });
    projectServices.getAllProjectsFirstLetters().then((data) => {
      setcontainingProjectLetters(data.data);
    });
    teamMemberServices.getAllTeamMembers().then((data) => {
      setleaders(data.data);
    });
  }, [projects]);
  useEffect(() => {
    projectServices
      .getProjectsOnPage(
        pageNumber,
        activeFilterLetter,
        filterProjectsText,
        recordPerPage
      )
      .then((data) => {
        if (data.status == 204) setprojects([]);
        else setprojects(data.data);
      });
  }, [filterProjectsText, activeFilterLetter, pageNumber]);
  useEffect(() => {
    setactiveFilterLetter(
      filterParams.has("firstLetter") ? filterParams.get("firstLetter") : ""
    );
    setpageNumber(
      filterParams.has("pageNumber") ? filterParams.get("pageNumber") - 1 : 0
    );
    setfilterProjectsText(
      filterParams.has("filterText") ? filterParams.get("filterText") : ""
    );
  }, [filterParams]);
  return (
    <Projects
      leaders={leaders}
      customers={customers}
      filteredProjects={projects}
      containingProjectLetters={containingProjectLetters}
      pageNumber={pageNumber}
      numberOfPages={numberOfPages}
      filterText={filterProjectsText}
      activeFilterLetter={activeFilterLetter}
      changeFilterProjectsText={changeFilterProjectsText}
      addProjectHandler={addProject}
      updateProjectHandler={updateProject}
      deleteProjectHandler={deleteProject}
    ></Projects>
  );
}

export default ProjectsContainer;
