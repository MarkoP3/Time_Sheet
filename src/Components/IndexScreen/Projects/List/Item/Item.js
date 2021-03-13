import React, { useState } from "react";
import Heading from "./Heading/Heading";
import Details from "./Details/Details";

function Item({project,customers,leaders}) {
  const [active, setactive] = useState("none");
  function toggleDetails(e) {
    if (active == "none") setactive("block");
    else setactive("none");
  }
  return (
    <div className="item">
      <Heading toggleDetails={toggleDetails} project={project}></Heading>
      <Details active={active} project={project} customers={customers} leaders={leaders}></Details>
    </div>
  );
}

export default Item;
