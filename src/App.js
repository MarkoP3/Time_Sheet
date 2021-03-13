import "./App.css";
import "./Assets/css/style.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ForgotPasswordScreen from "./Components/ForgotPasswordScreen/ForgotPasswordScreen";
import LoginScreen from "./Components/LoginScreen/LoginScreen";
import Projects from "./Components/IndexScreen/Projects/Projects";
import Categories from "./Components/IndexScreen/Categories/Categories";
import Header from "./Components/IndexScreen/Header/Header";
import TimeSheet from "./Components/IndexScreen/TimeSheet/TimeSheet";
import TeamMembers from "./Components/IndexScreen/TeamMembers/TeamMembers";
import Reports from "./Components/IndexScreen/Reports/Reports";
import Footer from "./Components/IndexScreen/Footer/Footer";
import DaySheet from "./Components/IndexScreen/DaySheet/DaySheet";
import React, { useState } from "react";
import ClientsContainer from "./Containers/Clients/ClientsContainer";
function App() {
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
            <Redirect to={`/timesheet/${new Date().getFullYear()}/${new Date().getMonth()+1}`}></Redirect>
          </Route>
          <Route path="/clients">
            <Header></Header>
            <ClientsContainer></ClientsContainer>
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
          <Route path="/">
            <Redirect to={`/timesheet/${new Date().getFullYear()}/${new Date().getMonth()+1}`}></Redirect>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
