import "./App.css";
import "./Assets/css/style.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ForgotPasswordScreen from "./Components/ForgotPasswordScreen/ForgotPasswordScreen";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import Clients from "./Components/IndexScreen/Clients/Clients";
import Projects from "./Components/IndexScreen/Projects/Projects";
import Categories from "./Components/IndexScreen/Categories/Categories";
import Header from "./Components/IndexScreen/Header/Header";
import TimeSheet from "./Components/IndexScreen/TimeSheet/TimeSheet";
import TeamMembers from "./Components/IndexScreen/TeamMembers/TeamMembers";
import Reports from "./Components/IndexScreen/Reports/Reports";
import Footer from "./Components/IndexScreen/Footer/Footer";
import DaySheet from "./Components/IndexScreen/DaySheet/DaySheet";
import React, { useState, useEffect } from "react";
function App() {
  const [clients, setclients] = useState([
    {
      name: "Meron",
      address: "Perina 1",
      city: "Subotica",
      postal: "24000",
      country: "Serbia",
    },
    {
      name: "Maron",
      address: "Perina 1",
      city: "Subotica",
      postal: "24000",
      country: "Serbia",
    },
    {
      name: "Pero",
      address: "Perina 1",
      city: "Subotica",
      postal: "24000",
      country: "Serbia",
    },
  ]);
  const [filteredClients, setfilteredClients] = useState([...clients]);
  const [projects, setprojects] = useState([
    {
      name: "P1",
      description: "Ovo je neki projekat",
      lead: "Marko Puzović",
      customer: "Pero",
      status: "Inactive",
    },
  ]);
  const [teamMembers, setteamMembers] = useState([
    {
      name: "Marko Puzović",
      username: "marko123",
      hoursPerWeek: 40,
      email: "markopuzovic98@gmail.com",
      status: "Inactive",
      role: "Worker",
    },
  ]);
  function filterClientByLetter(letter) {
    setfilteredClients(
      clients.filter((value) => value.name[0].toLowerCase().includes(letter))
    );
  }

  /*useEffect(() => {
    setfilteredClients(filterClients())
  }, clients)*/
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route path="/forgot-pass">
            <ForgotPasswordScreen></ForgotPasswordScreen>
          </Route>
          <Route path="/login">
            <LoginScreen></LoginScreen>
          </Route>
          <Route path="/timesheet/days/:year/:month/:day">
            <Header></Header>
            <DaySheet></DaySheet>
            <Footer></Footer>
          </Route>
          <Route path="/timesheet/:year/:month">
            <Header></Header>
            <TimeSheet></TimeSheet>
            <Footer></Footer>
          </Route>
          <Route path="/timesheet">
            <Redirect to={`/timesheet/${new Date().getFullYear()}/${new Date().getMonth()+1}`}></Redirect>
          </Route>
          <Route path="/clients">
            <Header></Header>
            <Clients
              clients={filteredClients}
              filterClientByLetter={filterClientByLetter}
            ></Clients>
            <Footer></Footer>
          </Route>
          <Route path="/projects">
            <Header></Header>
            <Projects></Projects>
            <Footer></Footer>
          </Route>
          <Route path="/categories">
            <Header></Header>
            <Categories></Categories>
            <Footer></Footer>
          </Route>
          <Route path="/teamMembers">
            <Header></Header>
            <TeamMembers></TeamMembers>
            <Footer></Footer>
          </Route>
          <Route path="/reports">
            <Header></Header>
            <Reports></Reports>
            <Footer></Footer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
