import './App.css';
import './Assets/css/style.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import ForgotPasswordScreen from './Components/ForgotPasswordScreen/ForgotPasswordScreen';
import LoginScreen from './Components/LoginScreen/LoginScreen';
import Clients from './Components/IndexScreen/Clients/Clients'
import Projects from './Components/IndexScreen/Projects/Projects'
import Categories from './Components/IndexScreen/Categories/Categories'
import Header from './Components/IndexScreen/Header/Header'
import TimeSheet from './Components/IndexScreen/TimeSheet/TimeSheet'
import TeamMembers from './Components/IndexScreen/TeamMembers/TeamMembers';
import Reports from './Components/IndexScreen/Reports/Reports';
import Footer from './Components/IndexScreen/Footer/Footer';
import DaySheet from './Components/IndexScreen/DaySheet/DaySheet';
import { useState } from 'react';
function App() {
  const [date, setdate] = useState(new Date())
  function changeMonth(addValue)
  {
    setdate(new Date(date.setMonth(date.getMonth()+addValue)));
  }
  function changeDate(newDate)
  {
    setdate(newDate);
  }
  return (
    <div className="container">
      <div id="fancybox-overlay" style={{backgroundColor: "rgb(119, 119, 119)", opacity: "0.7", cursor: "pointer", height: "722px", display: "none"}}></div>
    <Router>
      <Switch>
        <Route path="/forgot-pass">
          <ForgotPasswordScreen></ForgotPasswordScreen>
        </Route>
        <Route path="/login">
          <LoginScreen></LoginScreen>
        </Route>
        <Route path="/timesheet/days">
            <Header></Header>
            <DaySheet date={date} changeDate={changeDate}></DaySheet>
            <Footer></Footer>
        </Route>
        <Route path="/timesheet">
            <Header></Header>
            <TimeSheet date={date} changeDate={changeDate} changeMonth={changeMonth}></TimeSheet>
            <Footer></Footer>
        </Route>
        <Route path="/clients">
            <Header></Header>
            <Clients></Clients>
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
