import React from "react";

function Add({ changeModalDisplay }) {
  return (
    <a
      href="#new-member"
      className="link new-member-popup"
      onClick={(e) => changeModalDisplay("block")}
    >
      Create new client
    </a>
  );
}

export default Add;
