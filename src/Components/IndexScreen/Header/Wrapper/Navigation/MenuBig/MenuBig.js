import React from 'react'
import {NavLink} from 'react-router-dom'
function MenuBig() {
    return (
        <ul className="menu">
      <li>
        <NavLink to="/timesheet" className="btn nav">
          Time Sheet
        </NavLink>
      </li>
      <li>
        <NavLink to="/clients" className="btn nav">
          Clients
        </NavLink>
      </li>
      <li>
        <NavLink to="/projects" className="btn nav">
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink to="/categories" className="btn nav">
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink to="/teamMembers" className="btn nav">
          Team Members
        </NavLink>
      </li>
      <li className="last">
        <NavLink to="/reports" className="btn nav">
          Reports
        </NavLink>
      </li>
    </ul>
    )
}

export default MenuBig
