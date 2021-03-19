import React, { useState } from "react";
import Details from "./Details/Details";
import Heading from "./Heading/Heading";

function Item({ updateTeamMemberHandler, deleteTeamMemberHandler, member }) {
  const [open, setopen] = useState("none");
  function toggleDetails(e) {
    if (open == "none") setopen("block");
    else setopen("none");
  }
  return (
    <div className="item">
      <Heading handleHeadingClick={toggleDetails} member={member}></Heading>
      <Details
        updateTeamMemberHandler={updateTeamMemberHandler}
        deleteTeamMemberHandler={deleteTeamMemberHandler}
        open={open}
        member={member}
      ></Details>
    </div>
  );
}

export default Item;
