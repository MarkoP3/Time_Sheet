import React from "react";
import Logout from "./Logout/Logout";
import UserMenu from "./UserMenu/UserMenu";

function User() {
  return (
    <ul className="user right">
      <UserMenu></UserMenu>
      <Logout></Logout>
    </ul>
  );
}

export default User;
