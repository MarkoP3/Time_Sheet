import React, { useState } from "react";
import Alpha from "../../Common/Alpha/Alpha";
import Pagination from "../../Common/Pagination/Pagination";
import Title from "../../Common/Title/Title";
import List from "./List/List";
import SearchAndAddBox from "./SearchAndAddBox/SearchAndAddBox";

function Projects({
  leaders,
  customers,
  filteredProjects,
  activeFilterLetter,
  containingProjectLetters,
  changeFilterProjectsText,
  pageNumber,
  numberOfPages,
  filterText,
  addProjectHandler,
  deleteProjectHandler,
  updateProjectHandler
}) {
  return (
    <div className="wrapper">
      <section className="content">
        <Title title="Projects"></Title>
        <SearchAndAddBox customers={customers} leaders={leaders} addProjectHandler={addProjectHandler}
          changeFilterProjectsText={changeFilterProjectsText}
        ></SearchAndAddBox>
        <Alpha
          containingLetters={containingProjectLetters}
          activeLetter={activeFilterLetter}
        ></Alpha>
        <List deleteProjectHandler={deleteProjectHandler}
        updateProjectHandler={updateProjectHandler}
          projects={filteredProjects}
          leaders={leaders}
          customers={customers}
        ></List>
        <Pagination activeFilterLetter={activeFilterLetter} pageNumber={pageNumber} numberOfPages={numberOfPages} filterText={filterText}></Pagination>
      </section>
    </div>
  );
}

export default Projects;
