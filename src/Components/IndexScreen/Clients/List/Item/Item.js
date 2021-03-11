import React, { useState } from "react";
import Details from "./Details/Details";
import Heading from "./Heading/Heading";

function Item({ client }) {
  const [active, setactive] = useState("none");
  function toggleDetails(e) {
    if (active == "none") setactive("block");
    else setactive("none");
  }
  return (
    <div className="item">
      <Heading toggleDetails={toggleDetails} name={client?.name}></Heading>
      <Details client={client} active={active}></Details>
    </div>
  );
}

export default Item;
