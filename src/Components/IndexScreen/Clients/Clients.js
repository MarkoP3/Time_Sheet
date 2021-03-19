import React, { useState } from "react";
import Alpha from "../../Common/Alpha/Alpha";
import Pagination from "../../Common/Pagination/Pagination";
import Title from "../../Common/Title/Title";
import ClientSearchAndAdd from "./ClientSearchAndAdd/ClientSearchAndAdd";
import List from "./List/List";

function Clients({pageNumber,numberOfPages,activeLetter,containingLetters,countries, filteredClients,filterText,addClientHandler,updateClientHandler,deleteClientHandler,changeFilterClientsText }) {
  return (
    <div className="wrapper">
      <section className="content">
        <Title title="Clients"></Title>
        <ClientSearchAndAdd addClientHandler={addClientHandler} countries={countries} changeFilterClientsText={changeFilterClientsText} filterText={filterText}></ClientSearchAndAdd>
        <Alpha activeLetter={activeLetter}
        containingLetters={containingLetters}
        ></Alpha>
        <List updateClientHandler={updateClientHandler} deleteClientHandler={deleteClientHandler} countries={countries} clients={filteredClients}></List>
        <Pagination activeFilterLetter={activeLetter} pageNumber={pageNumber} filterText={filterText} numberOfPages={numberOfPages}></Pagination>
      </section>
    </div>
  );
}

export default Clients;
