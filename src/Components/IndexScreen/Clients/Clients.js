import React, { useState } from "react";
import Alpha from "../../Common/Alpha/Alpha";
import Pagination from "../../Common/Pagination/Pagination";
import Title from "../../Common/Title/Title";
import ClientSearchAndAdd from "./ClientSearchAndAdd/ClientSearchAndAdd";
import List from "./List/List";

function Clients({countries, filteredClients,activeFilterLetter,filterText,containingClientLetters,changeFilterClientsText }) {
  return (
    <div className="wrapper">
      <section className="content">
        <Title title="Clients"></Title>
        <ClientSearchAndAdd countries={countries} changeFilterClientsText={changeFilterClientsText} filterText={filterText}></ClientSearchAndAdd>
        <Alpha
          containingLetters={containingClientLetters}
          activeLetter={activeFilterLetter}
        ></Alpha>
        <List countries={countries} clients={filteredClients}></List>
        <Pagination></Pagination>
      </section>
    </div>
  );
}

export default Clients;
