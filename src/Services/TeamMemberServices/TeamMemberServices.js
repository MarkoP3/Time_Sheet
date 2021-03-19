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
      `${process.env.REACT_APP_API_URL}teamMembers`,
      teamMember
    );
    /*return new Promise((resolve, reject) => {
      teamMember.id = mockTeamMembers.length + 1;
      mockTeamMembers.push(teamMember);
      resolve(true);
    });*/
  },
  deleteTeamMember: (teamMemberID) => {
    return axios.delete(
      `${process.env.REACT_APP_API_URL}teamMembers/${teamMemberID}`
    );
    /*return new Promise((resolve, reject) => {
      mockTeamMembers.splice(
        mockTeamMembers.findIndex(
          (teamMember) => teamMember.id == teamMemberID
        ),
        1
      );
      resolve(true);
    });*/
  },
  updateTeamMember: (teamMember) => {
    return axios.put(`${process.env.REACT_APP_API_URL}teamMembers`, teamMember);
    /*return new Promise((resolve, reject) => {
      mockTeamMembers[
        mockTeamMembers.findIndex(
          (teamMemberItem) => teamMemberItem.id == teamMember.id
        )
      ] = teamMember;
      resolve(true);
    });*/
  },
  getTeamMembersOnPage: (page, recordPerPage) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}teamMembers/onPage?page=${page}&recordsPerPage=${recordPerPage}`
    );
    /*return new Promise((resolve, reject) => {
      resolve(
        mockTeamMembers.slice(
          page * recordPerPage,
          page * recordPerPage + recordPerPage
        )
      );
    });*/
  },
  getTeamMemberNumberOfPages: (recordPerPage) => {
    return axios.get(
      `${process.env.REACT_APP_API_URL}teamMembers/numberOfPages?recordsPerPage=${recordPerPage}`
    );
    /*return new Promise((resolve, reject) => {
      resolve(Math.ceil(mockTeamMembers.length / recordPerPage));
    });*/
  },
  getAllTeamMembers() {
    return axios.get(`${process.env.REACT_APP_API_URL}teamMembers`);
    /*
    return new Promise((resolve, reject) =>
      resolve(
        mockTeamMembers.map((teamMember) => ({
          id: teamMember.id,
          name: teamMember.name,
        }))
      )
    );*/
  },
  resetPassword: (teamMemeberID) => {
    return new Promise((resolve, reject) => {
      resolve();
    });
  },
};

export default teamMemberServices;
