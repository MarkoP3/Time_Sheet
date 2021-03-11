import React, { useState } from "react";
import Alpha from "../../Common/Alpha/Alpha";
import Pagination from "../../Common/Pagination/Pagination";
import Title from "../../Common/Title/Title";
import ClientSearchAndAdd from "./ClientSearchAndAdd/ClientSearchAndAdd";
import List from "./List/List";

function Clients() {
  const [activeFilterLetter, setactiveFilterLetter] = useState("");
  const [containingClientLetters, setcontainingClientLetters] = useState([
    "a",
    "f",
    "c",
  ]);
  function changeFilterLetter(letter) {
    setactiveFilterLetter(letter);
  }
  return (
    <div className="wrapper">
      <section className="content">
        <Title title="Clients"></Title>
        <ClientSearchAndAdd></ClientSearchAndAdd>
        <Alpha
          containingLetters={containingClientLetters}
          activeLetter={activeFilterLetter}
          changeActive={changeFilterLetter}
        ></Alpha>
        <List></List>
        <Pagination></Pagination>
      </section>
    </div>
  );
}

export default Clients;
