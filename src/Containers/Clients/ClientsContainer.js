import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { recordPerPage } from "../../Components/Helper/Helper";
import Clients from "../../Components/IndexScreen/Clients/Clients";
import clientServices from "../../Services/ClientServices/ClientServices";
import countryServices from "../../Services/CountryServices/CountryServices";

function ClientsContainer() {
  const history = useHistory();
  const filterParams = new URLSearchParams(useLocation().search);
  const [activeFilterLetter, setactiveFilterLetter] = useState(
    filterParams.has("firstLetter") ? filterParams.get("firstLetter") : ""
  );
  const [containingLetters, setContainingLetters] = useState([]);
  const [pageNumber, setpageNumber] = useState(
    filterParams.has("pageNumber") ? filterParams.get("pageNumber") - 1 : 0
  );
  const [filterClientsText, setfilterClientsText] = useState(
    filterParams.has("filterText") ? filterParams.get("filterText") : ""
  );
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [clients, setClients] = useState([]);
  const [countries, setcountries] = useState([]);
  useEffect(() => {
    countryServices.getAllCountries().then((data) => {
      setcountries(data.data);
    });
    clientServices
      .getClientsOnPage(
        pageNumber,
        activeFilterLetter,
        filterClientsText,
        recordPerPage
      )
      .then((data) => {
        if (data.status == 204) setClients([]);
        else setClients(data.data);
      });
    clientServices
      .getClientNumberOfPages(
        activeFilterLetter,
        filterClientsText,
        recordPerPage
      )
      .then((data) => {
        setNumberOfPages(data.data);
      });
    clientServices.getAllClientsFirstLetters().then((data) => {
      setContainingLetters(data.data);
    });
  }, []);
  let searchTimeout;
  function changeFilterClientsText(text) {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      history.push(`clients?filterText=${text}`);
    }, 500);
  }
  function addClient(client) {
    clientServices
      .addClient(client)
      .then((result) => {
        return clientServices.getClientsOnPage(
          pageNumber,
          activeFilterLetter,
          filterClientsText,
          recordPerPage
        );
      })
      .then((data) => {
        if (data.status == 204) setClients([]);
        else setClients(data.data);
        console.log("sucessfuly added a client");
      })
      .catch((error) => {
        console.log("Something wen't wrong try again");
      });
  }
  function deleteClient(clientID) {
    clientServices
      .deleteClient(clientID)
      .then((result) => {
        return clientServices.getClientsOnPage(
          pageNumber,
          activeFilterLetter,
          filterClientsText,
          recordPerPage
        );
      })
      .then((data) => {
        if (data.status == 204) setClients([]);
        else setClients(data.data);
        console.log("sucessfuly deleted a client");
      })
      .catch((error) => {
        console.log(`error`, error);
        console.log("Something wen't wrong try again");
      });
  }
  function updateClient(client) {
    clientServices
      .updateClient(client)
      .then((result) => {
        return clientServices.getClientsOnPage(
          pageNumber,
          activeFilterLetter,
          filterClientsText,
          recordPerPage
        );
      })
      .then((data) => {
        if (data.status == 204) setClients([]);
        else setClients(data.data);
        console.log("sucessfuly updated a client");
      })
      .catch((error) => {
        console.log("Something wen't wrong try again");
      });
  }
  useEffect(() => {
    clientServices
      .getClientNumberOfPages(
        activeFilterLetter,
        filterClientsText,
        recordPerPage
      )
      .then((data) => {
        setNumberOfPages(data.data);
      });
    countryServices.getAllCountries().then((data) => {
      setcountries(data.data);
    });
    clientServices.getAllClientsFirstLetters().then((data) => {
      setContainingLetters(data.data);
    });
  }, [clients]);
  useEffect(() => {
    clientServices
      .getClientsOnPage(
        pageNumber,
        activeFilterLetter,
        filterClientsText,
        recordPerPage
      )
      .then((data) => {
        if (data.status == 204) setClients([]);
        else setClients(data.data);
      });
  }, [activeFilterLetter, pageNumber, filterClientsText]);
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
      activeLetter={activeFilterLetter}
      containingLetters={containingLetters}
      pageNumber={pageNumber}
      numberOfPages={numberOfPages}
      addClientHandler={addClient}
      updateClientHandler={updateClient}
      deleteClientHandler={deleteClient}
      changeFilterClientsText={changeFilterClientsText}
    ></Clients>
  );
}

export default ClientsContainer;
