import React from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu/Menu";

function UserMenu() {
  return (
    <li>
      <Link to={'/'}>Sladjana Miljanovic</Link>
      <div className="invisible"></div>
      <Menu></Menu>
    </li>
  );
}

export default UserMenu;
