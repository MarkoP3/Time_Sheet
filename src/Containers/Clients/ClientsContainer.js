import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { recordPerPage } from "../../Components/Helper/Helper";
import Clients from "../../Components/IndexScreen/Clients/Clients";

function ClientsContainer() {
  const filterParams = new URLSearchParams(useLocation().search);
  const [clients, setclients] = useState([
    {
      name: "Aron",
      address: "Perina 1",
      city: "Novi Sad",
      postal: "21000",
      country: "Serbia",
    },
    {
      name: "Baron",
      address: "Perina 1",
      city: "Novi Sad",
      postal: "21000",
      country: "Serbia",
    },
    {
      name: "Caron",
      address: "Perina 1",
      city: "Novi Sad",
      postal: "21000",
      country: "Serbia",
    },
    {
      name: "Daron",
      address: "Perina 1",
      city: "Novi Sad",
      postal: "21000",
      country: "Serbia",
    },
    {
      name: "Eron",
      address: "Perina 1",
      city: "Novi Sad",
      postal: "21000",
      country: "Serbia",
    },
    {
      name: "Feron",
      address: "Perina 1",
      city: "Novi Sad",
      postal: "21000",
      country: "Serbia",
    },
    {
      name: "Geron",
      address: "Perina 1",
      city: "Subotica",
      postal: "24000",
      country: "Serbia",
    },
    {
      name: "Peron",
      address: "Perina 1",
      city: "Subotica",
      postal: "24000",
      country: "Serbia",
    },
  ]);
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
    /*filterParams.has("filterText") ? filterParams.get("filterText") : ""*/ ""
  );
  console.log("filteredClients", filteredClients);
  console.log("filteredClientsOnPage", filteredClientsOnPage);
  function changeFilterLetter(letter) {
    setactiveFilterLetter(letter);
  }
  function changeFilterClientsText(text) {
    setfilterClientsText(text);
  }
  useEffect(() => {
    filterClientByFirstNameLetter(activeFilterLetter);
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
    filterClientsByText(filterClientsText);
  }, [filterClientsText]);
  useEffect(() => {
    setactiveFilterLetter(
      filterParams.has("firstLetter") ? filterParams.get("firstLetter") : ""
    );
    setpageNumber(
      filterParams.has("pageNumber") ? filterParams.get("pageNumber") - 1 : 0
    );
  }, [filterParams]);
  function filterClientsByText(text) {
    setfilteredClients(
      clients.filter((client) => {
        for (const [key, value] of Object.entries(client)) {
          if (value.includes(text)) return true;
        }
        return false;
      })
    );
  }
  function filterClientByFirstNameLetter(letter) {
    setfilteredClients(
      clients.filter((value) => value.name[0].toLowerCase().includes(letter))
    );
  }
  return (
    <Clients
      url={`/clients?firstLetter=${activeFilterLetter}&pageNumber=`}
      numberOfPages={numberOfPages}
      pageNumber={pageNumber}
      filteredClients={filteredClientsOnPage}
      containingClientLetters={containingClientLetters}
      activeFilterLetter={activeFilterLetter}
      changeFilterClientsText={changeFilterClientsText}
    ></Clients>
  );
}

export default ClientsContainer;
