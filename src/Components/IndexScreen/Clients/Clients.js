import React, { useState } from "react";
import Alpha from "../../Common/Alpha/Alpha";
import Pagination from "../../Common/Pagination/Pagination";
import Title from "../../Common/Title/Title";
import ClientSearchAndAdd from "./ClientSearchAndAdd/ClientSearchAndAdd";
import List from "./List/List";

function Clients({ clients, filterClientByLetter }) {
  const [activeFilterLetter, setactiveFilterLetter] = useState("");
  console.log();
  const [containingClientLetters, setcontainingClientLetters] = useState([
    ...clients
      .map((client) => client.name[0].toLowerCase())
      .filter((value, index, item) => {
        return item.indexOf(value) === index;
      }),
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
          filter={filterClientByLetter}
        ></Alpha>
        <List clients={clients}></List>
        <Pagination></Pagination>
      </section>
    </div>
  );
}

export default Clients;
