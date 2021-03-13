import React from "react";

function Heading({ toggleDetails,project }) {
  return (
    <div className="heading" onClick={toggleDetails}>
      <span>{project.name}</span>{" "}
      <span>
        <em>({project.customer})</em>
      </span>
      <i>+</i>
    </div>
  );
}

export default Heading;
