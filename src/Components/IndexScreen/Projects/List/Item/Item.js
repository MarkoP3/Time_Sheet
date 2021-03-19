import React, { useState } from "react";
import Heading from "./Heading/Heading";
import Details from "./Details/Details";

function Item({
  deleteProjectHandler,
  updateProjectHandler,
  project,
  customers,
  leaders,
}) {
  const [open, setopen] = useState("none");
  function toggleDetails(e) {
    if (open == "none") setopen("block");
    else setopen("none");
  }
  return (
    <div className="item">
      <Heading handleHeadingClick={toggleDetails} project={project}></Heading>
      <Details
        deleteProjectHandler={deleteProjectHandler}
        updateProjectHandler={updateProjectHandler}
        open={open}
        project={project}
        customers={customers}
        leaders={leaders}
      ></Details>
    </div>
  );
}

export default Item;
