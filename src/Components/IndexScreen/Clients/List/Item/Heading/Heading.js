import React from "react";

function Heading({ toggleDetails , name }) {
  return (
    <div className="heading" onClick={toggleDetails}>
      <span>{name}</span>
      <i>+</i>
    </div>
  );
}

export default Heading;
