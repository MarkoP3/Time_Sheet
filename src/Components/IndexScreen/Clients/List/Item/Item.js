import React, { useState } from "react";
import Details from "./Details/Details";
import Heading from "./Heading/Heading";

function Item() {
  const [active, setactive] = useState("none");
  function toggleDetails(e) {
    if (active == "none") setactive("block");
    else setactive("none");
  }
  return (
    <div className="item">
      <Heading toggleDetails={toggleDetails}></Heading>
      <Details active={active}></Details>
    </div>
  );
}

export default Item;
