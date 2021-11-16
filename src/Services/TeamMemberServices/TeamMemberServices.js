let mockTeamMembers = [
  {
    id: 1,
    name: "Marko Puzović",
    username: "marko123",
    hoursPerWeek: 40,
    email: "markopuzovic98@gmail.com",
    status: "Inactive",
    role: "Worker",
  },
  {
    id: 2,
    name: "Darko Puzović",
    username: "marko123",
    hoursPerWeek: 40,
    email: "markopuzovic98@gmail.com",
    status: "Inactive",
    role: "Worker",
  },
  {
    id: 3,
    name: "Narko Puzović",
    username: "marko123",
    hoursPerWeek: 40,
    email: "markopuzovic98@gmail.com",
    status: "Inactive",
    role: "Worker",
  },
];
const axios = require("axios");
const teamMemberServices = {
  addTeamMember: (teamMember) => {
    return axios.post(
      `${process.env.REACT_APP_API_URL}team-members`,
      teamMember
    );
  },
  deleteTeamMember: (teamMemberID) => {
    return axios.delete(
      `${process.env.REACT_APP_API_URL}team-members/${teamMemberID}`
    );
  },
  updateTeamMember: (teamMember) => {
    return axios.put(
      `${process.env.REACT_APP_API_URL}team-members`,
      teamMember
    );
  },
  getTeamMembersOnPage: (page, recordPerPage) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}team-members/page/${page}?recordsPerPage=${recordPerPage}`
    );
  },
  getTeamMemberNumberOfPages: (recordPerPage) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}team-members/numberOfPages?recordsPerPage=${recordPerPage}`
    );
  },
  getAllTeamMembers: () => {
    return axios.get(`${process.env.REACT_APP_API_URL}team-members`);
  },
  getHoursPerDay: () => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}team-members/42b667ab-d17b-4a8f-aa97-a3f5c62467c1/hours-per-day`
    );
  },
  resetPassword: (teamMemeberID) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  },
};

export default teamMemberServices;
