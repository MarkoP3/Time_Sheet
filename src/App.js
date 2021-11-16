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
import Footer from "./Components/IndexScreen/Footer/Footer";
import DaySheet from "./Components/IndexScreen/DaySheet/DaySheet";
import ClientsContainer from "./Containers/Clients/ClientsContainer";
import TeamMembersContainer from "./Containers/TeamMembers/TeamMembersContainer";
import ReportsContainer from "./Containers/ReportsContainer/ReportsContainer";
import TimeSheetContainer from "./Containers/TimeSheetContainer/TimeSheetContainer";
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
            <TimeSheetContainer></TimeSheetContainer>
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
            <ReportsContainer></ReportsContainer>
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
