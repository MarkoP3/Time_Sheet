import React from "react";

function Heading({ handleHeadingClick,project }) {
  return (
    <div className="heading" onClick={handleHeadingClick}>
      <span>{project.name}</span>{" "}
      <span>
        <em>({project.customer})</em>
      </span>
      <i>+</i>
    </div>
  );
}

export default Heading;
