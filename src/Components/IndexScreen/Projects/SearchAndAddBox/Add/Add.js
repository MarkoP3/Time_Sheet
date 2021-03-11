import React from "react";

function Add({ changeModalDisplay }) {
  return (
    <a
      onClick={(e) => changeModalDisplay("block")}
      href="#new-member"
      className="link new-member-popup"
    >
      Create new project
    </a>
  );
}

export default Add;
