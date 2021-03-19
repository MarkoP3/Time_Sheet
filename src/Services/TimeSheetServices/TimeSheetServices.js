const mockTimeSheet = [
  {
    id: 1,
    teamMemberID: 1,
    teamMember: "Marko Puzović",
    clientID: 1,
    client: "Aron",
    categoryID: 1,
    category: "Kategorija 1",
    projectID: 2,
    project: "Drugi projekat",
    date: "1-10-2021",
    description: "Nesto",
    overtime: 0,
    time: 7,
  },
];
const timeSheetServices = {
  getIntervalTimeSheet: (
    teamMemberID,
    clientID,
    projectID,
    categoryID,
    from,
    to
  ) => {
    return new Promise((resolve, reject) => {
      let array = [];
      mockTimeSheet.forEach((el) => {
        if (
          String(el.teamMemberID).includes(teamMemberID) &&
          String(el.clientID).includes(clientID) &&
          String(el.projectID).includes(projectID) &&
          String(el.categoryID).includes(categoryID) &&
          (from == ""
            ? true
            : new Date(el.date).getTime() >= new Date(from).getTime()) &&
          (to == ""
            ? true
            : new Date(el.date).getTime() <= new Date(to).getTime())
        ) {
          array.push(el);
        }
      });
      console.log(`array`, array);
      resolve(array);
    });
  },
};
export default timeSheetServices;
