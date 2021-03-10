import React from "react";

function Heading({ toggleDetails }) {
  return (
    <div className="heading" onClick={toggleDetails}>
      <span>ADAM Software NV</span>
      <i>+</i>
    </div>
  );
}

export default Heading;
