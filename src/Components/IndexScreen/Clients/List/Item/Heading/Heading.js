import React from "react";

function Heading({ handleHeadingClick , name }) {
  return (
    <div className="heading" onClick={handleHeadingClick}>
      <span>{name}</span>
      <i>+</i>
    </div>
  );
}

export default Heading;
