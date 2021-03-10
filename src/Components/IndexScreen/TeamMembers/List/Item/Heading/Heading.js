import React from "react";

function Heading({toggleDetails}) {
  return (
    <div className="heading" onClick={toggleDetails}>
      <span>Sladjana Miljanovic</span>
      <i>+</i>
    </div>
  );
}

export default Heading;
