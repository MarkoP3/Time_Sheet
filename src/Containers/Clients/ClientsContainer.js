import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { getFirstLetters, getPageRows, mockClients, mockCountries, recordPerPage } from "../../Components/Helper/Helper";
import Clients from "../../Components/IndexScreen/Clients/Clients";

function ClientsContainer() {
  const history = useHistory();
  const filterParams = new URLSearchParams(useLocation().search);
  const [activeFilterLetter, setactiveFilterLetter] = useState(
    filterParams.has("firstLetter") ? filterParams.get("firstLetter") : ""
  );
  const [pageNumber, setpageNumber] = useState(
    filterParams.has("pageNumber") ? filterParams.get("pageNumber") - 1 : 0
  );
  const [filterClientsText, setfilterClientsText] = useState(
    filterParams.has("filterText") ? filterParams.get("filterText") : ""
  );
  const [clients, setClients] = useState(getPageRows(pageNumber,activeFilterLetter,filterClientsText,window.location.pathname))
  const [countries, setcountries] = useState(mockCountries)

  const [containingClientLetters, setcontainingClientLetters] = useState(getFirstLetters(window.location.pathname));
  let searchTimeout;
  function changeFilterClientsText(text) {
    clearTimeout(searchTimeout);
    searchTimeout=setTimeout( ()=>{
      history.push(
      `clients?filterText=${text}`
    )
      },500)
  }
  useEffect(() => {
    setClients(getPageRows(pageNumber,activeFilterLetter,filterClientsText,window.location.pathname));
  }, [activeFilterLetter,pageNumber,filterClientsText]);
  useEffect(() => {
    setpageNumber(
      filterParams.has("pageNumber") ? filterParams.get("pageNumber") - 1 : 0
    );
    setactiveFilterLetter(
      filterParams.has("firstLetter") ? filterParams.get("firstLetter") : ""
    );
    setfilterClientsText(
      filterParams.has("filterText") ? filterParams.get("filterText") : ""
    );
  }, [filterParams]);
  return (
    <Clients
      countries={countries}
      filteredClients={clients}
      filterText={filterClientsText}
      containingClientLetters={containingClientLetters}
      activeFilterLetter={activeFilterLetter}
      changeFilterClientsText={changeFilterClientsText}
    ></Clients>
  );
}

export default ClientsContainer;
