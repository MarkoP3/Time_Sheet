import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { recordPerPage } from "../../Components/Helper/Helper";
import Projects from "../../Components/IndexScreen/Projects/Projects";

function ProjectsContainer({ projects, leaders, customers }) {
  const history = useHistory();
  const filterParams = new URLSearchParams(useLocation().search);
  const [containingProjectLetters, setcontainingProjectLetters] = useState([
    ...projects
      .map((project) => project.name[0].toLowerCase())
      .filter((value, index, item) => {
        return item.indexOf(value) === index;
      }),
  ]);
  const [filteredProjects, setfilteredProjects] = useState([...projects]);
  const [activeFilterLetter, setactiveFilterLetter] = useState(
    filterParams.has("firstLetter") ? filterParams.get("firstLetter") : ""
  );
  const [pageNumber, setpageNumber] = useState(
    filterParams.has("firstLetter") ? filterParams.get("firstLetter") - 1 : 0
  );
  const [numberOfPages, setNumberOfPages] = useState(
    Math.ceil(filteredProjects.length / recordPerPage)
  );
  const [filteredProjectsOnPage, setFilteredProjectsOnPage] = useState(
    filteredProjects.slice(
      pageNumber * recordPerPage,
      pageNumber * recordPerPage + recordPerPage
    )
  );
  const [filterProjectsText, setfilterProjectsText] = useState(
    filterParams.has("filterText") ? filterParams.get("filterText") : ""
  );
  console.log("filteredProjects", filteredProjects);
  console.log("filteredProjectsOnPage", filteredProjectsOnPage);
  function changeFilterProjectsText(text) {
    history.push(`projects?filterText=${text}`);
  }
  useEffect(() => {
    filterProjects();
  }, [activeFilterLetter]);
  useEffect(() => {
    setFilteredProjectsOnPage(
      filteredProjects.slice(
        pageNumber * recordPerPage,
        pageNumber * recordPerPage + recordPerPage
      )
    );
  }, [pageNumber]);
  useEffect(() => {
    setFilteredProjectsOnPage(
      filteredProjects.slice(
        pageNumber * recordPerPage,
        pageNumber * recordPerPage + recordPerPage
      )
    );
    setNumberOfPages(Math.ceil(filteredProjects.length / recordPerPage));
  }, [filteredProjects]);
  useEffect(() => {
    filterProjects();
  }, [filterProjectsText]);
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
  function filterProjects() {
    if (filterParams.has("firstLetter")) {
      setfilteredProjects(
        projects.filter((value) =>
          value.name[0].toLowerCase().includes(activeFilterLetter)
        )
      );
    } else if (filterParams.has("filterText"))
      setfilteredProjects(
        projects.filter((project) => {
          for (const [key, value] of Object.entries(project)) {
            if (String(value).includes(filterProjectsText)) return true;
          }
          return false;
        })
      );
    else setfilteredProjects(projects);
  }
  return (
    <Projects
      leaders={leaders}
      customers={customers}
      url={`/projects`}
      numberOfPages={numberOfPages}
      pageNumber={pageNumber}
      filteredProjects={filteredProjectsOnPage}
      containingProjectLetters={containingProjectLetters}
      filterText={filterProjectsText}
      activeFilterLetter={activeFilterLetter}
      changeFilterProjectsText={changeFilterProjectsText}
    ></Projects>
  );
}

export default ProjectsContainer;
