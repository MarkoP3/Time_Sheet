import "./App.css";
import "./Assets/css/style.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ForgotPasswordScreen from "./Components/ForgotPasswordScreen/ForgotPasswordScreen";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import ProjectsContainer from "./Containers/Projects/ProjectsContainer";
import Categories from "./Components/IndexScreen/Categories/Categories";
import Header from "./Components/IndexScreen/Header/Header";
import TimeSheet from "./Components/IndexScreen/TimeSheet/TimeSheet";
import TeamMembers from "./Components/IndexScreen/TeamMembers/TeamMembers";
import Reports from "./Components/IndexScreen/Reports/Reports";
import Footer from "./Components/IndexScreen/Footer/Footer";
import DaySheet from "./Components/IndexScreen/DaySheet/DaySheet";
import React, { useState } from "react";
import ClientsContainer from "./Containers/Clients/ClientsContainer";
import {
  mockClients,
  mockCountries,
  mockProjects,
  mockTeamMembers,
} from "./Components/Helper/Helper";
import TeamMembersContainer from "./Containers/TeamMembers/TeamMembersContainer";
function App() {
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
          <Route path="/timesheet/:year/:month/:day">
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
            <Redirect
              to={`/timesheet/${new Date().getFullYear()}/${
                new Date().getMonth() + 1
              }`}
            ></Redirect>
          </Route>
          <Route path="/clients">
            <Header></Header>
            <ClientsContainer></ClientsContainer>
            <Footer></Footer>
          </Route>
          <Route path="/projects">
            <Header></Header>
            <ProjectsContainer></ProjectsContainer>
            <Footer></Footer>
          </Route>
          <Route path="/categories">
            <Header></Header>
            <Categories></Categories>
            <Footer></Footer>
          </Route>
          <Route path="/teamMembers">
            <Header></Header>
            <TeamMembersContainer></TeamMembersContainer>
            <Footer></Footer>
          </Route>
          <Route path="/reports">
            <Header></Header>
            <Reports></Reports>
            <Footer></Footer>
          </Route>
          <Route path="/">
            <Redirect
              to={`/timesheet/${new Date().getFullYear()}/${
                new Date().getMonth() + 1
              }`}
            ></Redirect>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
