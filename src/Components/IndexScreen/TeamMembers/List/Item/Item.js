import React, { useState } from "react";
import Details from "./Details/Details";
import Heading from "./Heading/Heading";

function Item({member}) {
  
  const [active, setactive] = useState("none");
  function toggleDetails(e) {
    console.log(`tu sam`, active)
    if (active == "none") setactive("block");
    else setactive("none");
  }
  return (
    <div className="item">
      <Heading toggleDetails={toggleDetails} member={member}></Heading>
      <Details active={active} member={member}></Details>
    </div>
  );
}

export default Item;
