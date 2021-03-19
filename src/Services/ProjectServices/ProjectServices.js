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
    /*return new Promise((resolve, reject) => {
      project.id = mockProjects.length + 1;
      mockProjects.push(project);
      resolve(true);
    });*/
  },
  deleteProject: (projectID) => {
    return axios.delete(
      `${process.env.REACT_APP_API_URL}projects/${projectID}`
    );
    /*return new Promise((resolve, reject) => {
      mockProjects.splice(
        mockProjects.findIndex((project) => project.id == projectID),
        1
      );
      resolve(true);
    });*/
  },
  updateProject: (project) => {
    return axios.put(`${process.env.REACT_APP_API_URL}projects`, project);
    /* return new Promise((resolve, reject) => {
      mockProjects[
        mockProjects.findIndex((projectItem) => projectItem.id == project.id)
      ] = project;
      resolve(true);
    });*/
  },
  getProjectsOnPage: (page, firstLetter, filterText, recordPerPage) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}projects/onPage?page=${page}&firstLetter=${firstLetter}&filterText=${filterText}&recordsPerPage=${recordPerPage}`
    );
    /*return new Promise((resolve, reject) => {
      if (firstLetter != "")
        resolve(
          mockProjects
            .filter((value) =>
              value.name[0].toLowerCase().includes(firstLetter)
            )
            .slice(page * recordPerPage, page * recordPerPage + recordPerPage)
        );
      else if (filterText != "")
        resolve(
          mockProjects
            .filter((client) => {
              for (const [key, value] of Object.entries(client)) {
                if (String(value).includes(filterText)) return true;
              }
              return false;
            })
            .slice(page * recordPerPage, page * recordPerPage + recordPerPage)
        );
      else
        resolve(
          mockProjects.slice(
            page * recordPerPage,
            page * recordPerPage + recordPerPage
          )
        );
    });*/
  },
  getProjectNumberOfPages: (firstLetter, filterText, recordPerPage) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}projects/numberOfPages?firstLetter=${firstLetter}&filterText=${filterText}&recordsPerPage=${recordPerPage}`
    );
    /*return new Promise((resolve, reject) => {
      if (firstLetter != "")
        resolve(
          Math.ceil(
            mockProjects.filter((value) =>
              value.name[0].toLowerCase().includes(firstLetter)
            ).length / recordPerPage
          )
        );
      else if (filterText != "")
        resolve(
          Math.ceil(
            mockProjects.filter((client) => {
              for (const [key, value] of Object.entries(client)) {
                if (String(value).includes(filterText)) return true;
              }
              return false;
            }).length / recordPerPage
          )
        );
      else resolve(Math.ceil(mockProjects.length / recordPerPage));
    });*/
  },
  getAllProjectsFirstLetters: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}projects/firstLetters`);
    /*return new Promise((resolve, reject) => {
      resolve(
        mockProjects
          .map((row) => row.name[0].toLowerCase())
          .filter((value, index, item) => {
            return item.indexOf(value) === index;
          })
      );
    });*/
  },
  getAllProjects() {
    return axios.get(`${process.env.REACT_APP_API_URL}projects`);
    /*return new Promise((resolve, reject) =>
      resolve(
        mockProjects.map((project) => ({ id: project.id, name: project.name }))
      )
    );*/
  },
  getAllProjectsOfCustomer: (customerID) => {
    return new Promise((resolve, reject) => {
      resolve(
        mockProjects.filter((project) => project.customerID == customerID)
      );
    });
  },
};

export default projectSerivces;
