import React from "react";

function Menu() {
  return (
    <div className="user-menu">
      <ul>
        <li>
          <a href="javascript:;" className="link">
            Change password
          </a>
        </li>
        <li>
          <a href="javascript:;" className="link">
            Settings
          </a>
        </li>
        <li>
          <a href="javascript:;" className="link">
            Export all data
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
