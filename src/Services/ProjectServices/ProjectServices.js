let mockProjects = [
  {
    id: 1,
    name: "P1",
    description: "Ovo je neki projekat",
    lead: "Darko Puzović",
    customer: "Peron",
    customerID: 8,
    leadID: 2,
    status: "Inactive",
  },
  {
    id: 2,
    name: "Drugi projekat",
    description: "Nesto nesto",
    lead: "Narko Puzović",
    leadID: 3,
    customer: "Aron",
    customerID: 1,
    status: "Archive",
  },
  {
    id: 3,
    name: "Treci projekat",
    description: "Nesto nesto",
    lead: "Marko Puzović",
    leadID: 1,
    customer: "Daron",
    customerID: 4,
    status: "Archive",
  },
  {
    id: 4,
    name: "Cetvrti projekat",
    description: "Nesto nesto",
    lead: "Marko Puzović",
    leadID: 1,
    customer: "Aron",
    customerID: 1,
    status: "Archive",
  },
];
const axios = require("axios");
const projectSerivces = {
  addProject: (project) => {
    return axios.post(`${process.env.REACT_APP_API_URL}projects`, project);
  },
  deleteProject: (projectID) => {
    return axios.delete(
      `${process.env.REACT_APP_API_URL}projects/${projectID}`
    );
  },
  updateProject: (project) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}projects/${project.id}`,
      project
    );
  },
  getProjectsOnPage: (page, firstLetter, filterText, recordPerPage) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}projects?page=${page}&firstLetter=${firstLetter}&filterText=${filterText}&recordsPerPage=${recordPerPage}`
    );
  },
  getProjectNumberOfPages: (firstLetter, filterText, recordPerPage) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}projects/number-of-pages?firstLetter=${firstLetter}&filterText=${filterText}&recordsPerPage=${recordPerPage}`
    );
  },
  getAllProjectsFirstLetters: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}projects/first-letters`);
  },
  getAllProjects() {
    return axios.get(`${process.env.REACT_APP_API_URL}projects`);
  },
  getAllProjectsOfCustomer: (customerID) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}projects/customer/${customerID}`
    );
  },
};

export default projectSerivces;
