import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { recordPerPage } from "../../Components/Helper/Helper";
import Clients from "../../Components/IndexScreen/Clients/Clients";

function ClientsContainer({clients,countries}) {
  const history = useHistory();
  const filterParams = new URLSearchParams(useLocation().search);
  const [containingClientLetters, setcontainingClientLetters] = useState([
    ...clients
      .map((client) => client.name[0].toLowerCase())
      .filter((value, index, item) => {
        return item.indexOf(value) === index;
      }),
  ]);
  const [filteredClients, setfilteredClients] = useState([...clients]);
  const [activeFilterLetter, setactiveFilterLetter] = useState(
    filterParams.has("firstLetter") ? filterParams.get("firstLetter") : ""
  );
  const [pageNumber, setpageNumber] = useState(
    filterParams.has("firstLetter") ? filterParams.get("firstLetter") - 1 : 0
  );
  const [numberOfPages, setNumberOfPages] = useState(
    Math.ceil(filteredClients.length / recordPerPage)
  );
  const [filteredClientsOnPage, setFilteredClientsOnPage] = useState(
    filteredClients.slice(
      pageNumber * recordPerPage,
      pageNumber * recordPerPage + recordPerPage
    )
  );
  const [filterClientsText, setfilterClientsText] = useState(
    filterParams.has("filterText") ? filterParams.get("filterText") : ""
  );
  function changeFilterLetter(letter) {
    setactiveFilterLetter(letter);
  }
  function changeFilterClientsText(text) {
    history.push(
      `clients?filterText=${text}`
    );
  }
  useEffect(() => {
    filterClients();
  }, [activeFilterLetter]);
  useEffect(() => {
    setFilteredClientsOnPage(
      filteredClients.slice(
        pageNumber * recordPerPage,
        pageNumber * recordPerPage + recordPerPage
      )
    );
  }, [pageNumber]);
  useEffect(() => {
    setFilteredClientsOnPage(
      filteredClients.slice(
        pageNumber * recordPerPage,
        pageNumber * recordPerPage + recordPerPage
      )
    );
    setNumberOfPages(Math.ceil(filteredClients.length / recordPerPage));
  }, [filteredClients]);
  useEffect(() => {
    filterClients();
  }, [filterClientsText]);
  useEffect(() => {
    setactiveFilterLetter(
      filterParams.has("firstLetter") ? filterParams.get("firstLetter") : ""
    );
    setpageNumber(
      filterParams.has("pageNumber") ? filterParams.get("pageNumber") - 1 : 0
    );
    setfilterClientsText(
      filterParams.has("filterText") ? filterParams.get("filterText") : ""
    );
  }, [filterParams]);
  function filterClients()
  {
    if(filterParams.has('firstLetter'))
    {
    setfilteredClients(
      clients.filter((value) => value.name[0].toLowerCase().includes(activeFilterLetter))
    );
    }
    else if(filterParams.has('filterText'))
    setfilteredClients(
      clients.filter((client) => {
        for (const [key, value] of Object.entries(client)) {
          if (String(value).includes(filterClientsText)) return true;
        }
        return false;
      })
    );
    else
    setfilteredClients(clients);
  }
  return (
    <Clients
      countries={countries}
      url={`/clients`}
      numberOfPages={numberOfPages}
      pageNumber={pageNumber}
      filteredClients={filteredClientsOnPage}
      filterText={filterClientsText}
      containingClientLetters={containingClientLetters}
      activeFilterLetter={activeFilterLetter}
      changeFilterClientsText={changeFilterClientsText}
    ></Clients>
  );
}

export default ClientsContainer;
