import React, { useState } from "react";
import Alpha from "../../Common/Alpha/Alpha";
import Pagination from "../../Common/Pagination/Pagination";
import Title from "../../Common/Title/Title";
import List from "./List/List";
import SearchAndAddBox from "./SearchAndAddBox/SearchAndAddBox";

function Projects() {
  const [activeFilterLetter, setactiveFilterLetter] = useState("");
  const [containingProjectLetters, setcontainingProjectLetters] = useState([
    "e",
    "d",
    "w",
  ]);
  function changeFilterLetter(letter) {
    setactiveFilterLetter(letter);
  }
  return (
    <div className="wrapper">
      <section className="content">
        <Title title="Projects"></Title>
        <SearchAndAddBox></SearchAndAddBox>
        <Alpha
          containingLetters={containingProjectLetters}
          activeLetter={activeFilterLetter}
          changeActive={changeFilterLetter}
        ></Alpha>
        <List></List>
        <Pagination></Pagination>
      </section>
    </div>
  );
}

export default Projects;
