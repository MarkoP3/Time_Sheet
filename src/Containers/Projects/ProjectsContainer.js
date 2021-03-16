import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import {
  getFirstLetters,
  getPageRows
} from "../../Components/Helper/Helper";
import Projects from "../../Components/IndexScreen/Projects/Projects";

function ProjectsContainer() {
  //#region variables
  const history = useHistory();
  const filterParams = new URLSearchParams(useLocation().search);
  const leaders = getPageRows(-1, "", "", "/teamMembers");
  const customers = getPageRows(-1, "", "", "/clients");
  //#endregion
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
  const [activeFilterLetter, setactiveFilterLetter] = useState(
    filterParams.has("firstLetter") ? filterParams.get("firstLetter") : ""
  );
  const [projects, setprojects] = useState(
    getPageRows(
      pageNumber,
      activeFilterLetter,
      filterProjectsText,
      window.location.pathname
    )
  );
  const [containingProjectLetters, setcontainingProjectLetters] = useState(
    getFirstLetters(window.location.pathname)
  );
  useEffect(() => {
    setprojects(
      getPageRows(
        pageNumber,
        activeFilterLetter,
        filterProjectsText,
        window.location.pathname
      )
    );
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
      filterText={filterProjectsText}
      activeFilterLetter={activeFilterLetter}
      changeFilterProjectsText={changeFilterProjectsText}
    ></Projects>
  );
}

export default ProjectsContainer;
