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
    date: "11-16-2021",
    description: "Nesto",
    overtime: 0,
    time: 7.5,
  },
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
    date: "11-15-2021",
    description: "Nesto",
    overtime: 0,
    time: 7.5,
  },
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
    date: "11-17-2021",
    description: "Nesto",
    overtime: 0,
    time: 7.5,
  },
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
    date: "11-18-2021",
    description: "Nesto",
    overtime: 0,
    time: 7.5,
  },
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
    date: "11-19-2021",
    description: "Nesto",
    overtime: 0,
    time: 7.5,
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
      resolve(array);
    });
  },
  getMonthViewData: (teamMember, from, to) => {
    return new Promise((resolve, reject) => {
      from = new Date(from);
      to = new Date(to);
      let dates = [];
      let distinctDates = [];
      timeSheetServices
        .getIntervalTimeSheet("", "", "", "", from, to)
        .then((data) => {
          dates = data;
          distinctDates = dates.filter((v, i, s) => {
            return (
              s.indexOf(v) ==
              dates.indexOf(
                dates.filter(
                  (el) =>
                    new Date(el.date).getTime() == new Date(v.date).getTime()
                )[
                  dates.filter(
                    (el) =>
                      new Date(el.date).getTime() == new Date(v.date).getTime()
                  ).length - 1
                ]
              )
            );
          });
          console.log(`distinctDates`, distinctDates);
          let newArray = [];
          distinctDates.forEach((value) => {
            newArray.push({
              date: value.date,
              hours: dates
                .filter(
                  (el) =>
                    new Date(el.date).getTime() ==
                    new Date(value.date).getTime()
                )
                .reduce((acc, val) => acc + value.time, 0),
            });
            resolve(newArray);
          });
        });
    });
  },
};
export default timeSheetServices;
