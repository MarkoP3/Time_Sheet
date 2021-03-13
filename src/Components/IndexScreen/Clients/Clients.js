import React, { useState } from "react";
import Alpha from "../../Common/Alpha/Alpha";
import Pagination from "../../Common/Pagination/Pagination";
import Title from "../../Common/Title/Title";
import ClientSearchAndAdd from "./ClientSearchAndAdd/ClientSearchAndAdd";
import List from "./List/List";

function Clients({url,numberOfPages,pageNumber, filteredClients,activeFilterLetter,containingClientLetters,changeFilterClientsText }) {
  return (
    <div className="wrapper">
      <section className="content">
        <Title title="Clients"></Title>
        <ClientSearchAndAdd changeFilterClientsText={changeFilterClientsText}></ClientSearchAndAdd>
        <Alpha
          containingLetters={containingClientLetters}
          activeLetter={activeFilterLetter}
        ></Alpha>
        <List clients={filteredClients}></List>
        <Pagination url={url} numberOfPages={numberOfPages} pageNumber={pageNumber}></Pagination>
      </section>
    </div>
  );
}

export default Clients;
