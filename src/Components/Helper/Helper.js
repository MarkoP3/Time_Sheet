export function generateUrlPrevMonth(date) {
  return `/timesheet/${
    date.getMonth() == 0
      ? `${date.getFullYear() - 1}/12`
      : `${date.getFullYear()}/${date.getMonth()}`
  }`;
}
export function generateUrlNextMonth(date) {
  return `/timesheet/${
    date.getMonth() == 11
      ? `${date.getFullYear() + 1}/1`
      : `${date.getFullYear()}/${date.getMonth() + 2}`
  }`;
}
export function dateDiff(date1, date2) {
  return Math.ceil(Math.abs(date1 - date2) / milisecondsPerDay);
}
export function numOfWeeksFromTo(from, to) {
  return Math.ceil(dateDiff(from, to) / daysInWeek);
}
export let milisecondsPerDay = 86400000;
export let daysInWeek = 7;
export function toPreviousMondayDays(date) {
  return (date.getDay() == 0 ? daysInWeek : date.getDay()) - 1;
}
export let days = [
  "MONDAY",
  "TUESDAY",
  "WEDNESDAY",
  "THURSDAY",
  "FRIDAY",
  "SATURDAY",
  "SUNDAY",
];
export let alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export function getWeek(date) {
  var onejan = new Date(date.getFullYear(), 0, 1);
  onejan = new Date(
    onejan.setDate(
      onejan.getDate() -
        ((onejan.getDay() == 0 ? daysInWeek : onejan.getDay()) - 1)
    )
  );
  return Math.ceil(
    ((date - onejan) / milisecondsPerDay + onejan.getDay()) / daysInWeek
  );
}
export function getWeekOfDates(date1, date2) {
  return date1.getFullYear() == date2.getFullYear()
    ? getWeek(date1)
    : `${getWeek(date1)}/${getWeek(date2)}`;
}
export function generateDaysUrl(date) {
  return `/timesheet/${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()}`;
}
export function nextWeek(date) {
  return new Date(new Date(date).setDate(date.getDate() + 7));
}
export function prevWeek(date) {
  return new Date(new Date(date).setDate(date.getDate() - 7));
}
export function getYearOfDates(date1, date2) {
  return date1.getFullYear() == date2.getFullYear()
    ? date2.getFullYear()
    : `${date1.getFullYear()}/${date2.getFullYear()}`;
}
export let recordPerPage = 3;
export let mockClients = [
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
export let mockProjects = [
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
export let mockTeamMembers = [
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
export let mockCountries = [
  { id: 1, name: "Serbia" },
  { id: 2, name: "Bosnia" },
];

export function getPageRows(page, firstLetter, filterText, screen) {

  const screens = {
    "/projects": mockProjects,
    "/clients": mockClients,
    "/teamMembers": mockTeamMembers,
  };
  const mockData = screens[screen];
  if(page==-1)
  {
    return mockData;
  }
  if (firstLetter != "")
    return mockData
      .filter((value) => value.name[0].toLowerCase().includes(firstLetter))
      .slice(page * recordPerPage, page * recordPerPage + recordPerPage);
  else if (filterText != "")
    return mockData
      .filter((client) => {
        for (const [key, value] of Object.entries(client)) {
          if (String(value).includes(filterText)) return true;
        }
        return false;
      })
      .slice(page * recordPerPage, page * recordPerPage + recordPerPage);
  else
    return mockData.slice(
      page * recordPerPage,
      page * recordPerPage + recordPerPage
    );
}
export function getPageNumbers(firstLetter, filterText, screen) {
  const screens = {
    "/projects": mockProjects,
    "/clients": mockClients,
    "/teamMembers": mockTeamMembers,
  };
  const mockData = screens[screen];
  if (firstLetter != "")
    return mockData.filter((value) =>
      value.name[0].toLowerCase().includes(firstLetter)
    ).length;
  else if (filterText != "")
    return mockData.filter((client) => {
      for (const [key, value] of Object.entries(client)) {
        if (String(value).includes(filterText)) return true;
      }
      return false;
    }).length;
  else return mockData.length;
}
export function getFirstLetters(screen) {
  const screens = {
    "/projects": mockProjects,
    "/clients": mockClients,
    "/teamMembers": mockTeamMembers,
  };
  const mockData = screens[screen];
 return mockData
      .map((row) => row.name[0].toLowerCase())
      .filter((value, index, item) => {
        return item.indexOf(value) === index;
      });
  
}
