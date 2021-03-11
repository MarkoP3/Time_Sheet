import React from "react";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import User from "./User/User";

function Wrapper() {
  return (
    <div className="wrapper">
      <Logo></Logo>
      <User></User>
      <Navigation></Navigation>
    </div>
  );
}

export default Wrapper;
