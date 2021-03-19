import React from "react";

function Heading({ handleHeadingClick, member }) {
  return (
    <div className="heading" onClick={handleHeadingClick}>
      <span>{member.name}</span>
      <i>+</i>
    </div>
  );
}

export default Heading;
