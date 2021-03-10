import React from "react";
import MenuBig from "./MenuBig/MenuBig";
import MobileMenu from "./MobileMenu/MobileMenu";
function Navigation() {
  return (
    <nav>
      <MenuBig></MenuBig>
      <MobileMenu></MobileMenu>
      <span className="line"></span>
    </nav>
  );
}

export default Navigation;
