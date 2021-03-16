import React from "react";

function Heading({ toggleDetails,member }) {
  return (
    <div className="heading" onClick={toggleDetails}>
      <span>{member.name}</span>
      <i>+</i>
    </div>
  );
}

export default Heading;
