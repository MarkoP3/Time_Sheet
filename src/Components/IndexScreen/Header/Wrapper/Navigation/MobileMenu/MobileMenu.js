import React from "react";

function MobileMenu() {
  return (
    <div className="mobile-menu">
      <a href="javascript:;" className="menu-btn">
        <i className="zmdi zmdi-menu"></i>
      </a>
      <ul>
        <li>
          <a href="javascript:;">TimeSheet</a>
        </li>
        <li>
          <a href="javascript:;">Clients</a>
        </li>
        <li>
          <a href="javascript:;">Projects</a>
        </li>
        <li>
          <a href="javascript:;">Categories</a>
        </li>
        <li>
          <a href="javascript:;">Team members</a>
        </li>
        <li className="last">
          <a href="javascript:;">Reports</a>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenu;
