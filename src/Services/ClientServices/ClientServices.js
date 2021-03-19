let mockClients = [
  {
    id: 1,
    name: "Aron",
    address: "Perina 1",
    city: "Novi Sad",
    postal: "21000",
    country: "Bosnia",
    countryId: 2,
  },
  {
    id: 2,
    name: "Baron",
    address: "Perina 1",
    city: "Novi Sad",
    postal: "21000",
    country: "Serbia",
    countryId: 1,
  },
  {
    id: 3,
    name: "Caron",
    address: "Perina 1",
    city: "Novi Sad",
    postal: "21000",
    country: "Serbia",
    countryId: 1,
  },
  {
    id: 4,
    name: "Daron",
    address: "Perina 1",
    city: "Novi Sad",
    postal: "21000",
    country: "Serbia",
    countryId: 1,
  },
  {
    id: 5,
    name: "Eron",
    address: "Perina 1",
    city: "Novi Sad",
    postal: "21000",
    country: "Serbia",
    countryId: 1,
  },
  {
    id: 6,
    name: "Feron",
    address: "Perina 1",
    city: "Novi Sad",
    postal: "21000",
    country: "Serbia",
    countryId: 1,
  },
  {
    id: 7,
    name: "Geron",
    address: "Perina 1",
    city: "Subotica",
    postal: "24000",
    country: "Serbia",
    countryId: 1,
  },
  {
    id: 8,
    name: "Peron",
    address: "Perina 1",
    city: "Subotica",
    postal: "24000",
    country: "Serbia",
    countryId: 1,
  },
];
let mockCountries = [
  { id: 1, name: "Serbia" },
  { id: 2, name: "Bosnia" },
];

const axios = require("axios");
const clientServices = {
  addClient: (client) => {
    return axios.post(`${process.env.REACT_APP_API_URL}clients`, client);
  },
  deleteClient: (clientID) => {
    return axios.delete(`${process.env.REACT_APP_API_URL}clients/${clientID}`);
  },
  updateClient: (client) => {
    return axios.put(`${process.env.REACT_APP_API_URL}clients`, client);
  },
  getClientsOnPage: (page, firstLetter, filterText, recordPerPage) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}clients/onPage?page=${page}&firstLetter=${firstLetter}&filterText=${filterText}&recordsPerPage=${recordPerPage}`
    );
  },
  getClientNumberOfPages: (firstLetter, filterText, recordPerPage) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}clients/numberOfPages?firstLetter=${firstLetter}&filterText=${filterText}&recordsPerPage=${recordPerPage}`
    );
  },
  getAllClientsFirstLetters: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}clients/firstLetters`);
  },
  getAllClients: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}clients`);
  },
};

export default clientServices;
