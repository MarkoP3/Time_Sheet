import React, { useState } from "react";
import Details from "./Details/Details";
import Heading from "./Heading/Heading";
import $ from 'jquery';
function Item({deleteClientHandler,updateClientHandler,countries, client }) {
  const [open, setopen] = useState("none")
  function toggleDetails(e) {
    if (open == "none") {
      setopen("block");
    }
    else setopen("none");
  }
  return (
    <div className={`item${(open=="none"?"":" open")}`}>
      <Heading handleHeadingClick={toggleDetails} name={client?.name}></Heading>
      <Details updateClientHandler={updateClientHandler} deleteClientHandler={deleteClientHandler} countries={countries} client={client} open={open}></Details>
    </div>
  );
}

export default Item;
