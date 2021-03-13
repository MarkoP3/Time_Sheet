import React, { useState } from "react";
import Alpha from "../../Common/Alpha/Alpha";
import Pagination from "../../Common/Pagination/Pagination";
import Title from "../../Common/Title/Title";
import List from "./List/List";
import SearchAndAddBox from "./SearchAndAddBox/SearchAndAddBox";

function Projects({
  leaders,
  customers,
  url,
  numberOfPages,
  pageNumber,
  filteredProjects,
  activeFilterLetter,
  containingProjectLetters,
  changeFilterProjectsText,
  filterText,
}) {
  return (
    <div className="wrapper">
      <section className="content">
        <Title title="Projects"></Title>
        <SearchAndAddBox
          changeFilterProjectsText={changeFilterProjectsText}
          filterText={filterText}
        ></SearchAndAddBox>
        <Alpha
          url={url}
          containingLetters={containingProjectLetters}
          activeLetter={activeFilterLetter}
        ></Alpha>
        <List
          projects={filteredProjects}
          leaders={leaders}
          customers={customers}
        ></List>
        <Pagination
          url={`${url}?${
            activeFilterLetter == ""
              ? `filterText=${filterText}&`
              : `firstLetter=${activeFilterLetter}&`
          }`}
          numberOfPages={numberOfPages}
          pageNumber={pageNumber}
        ></Pagination>
      </section>
    </div>
  );
}

export default Projects;
