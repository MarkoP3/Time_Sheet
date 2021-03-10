import React from "react";

function Heading({toggleDetails}) {
  return (
    <div className="heading" onClick={toggleDetails}>
      <span>BuzzMonitor</span>{" "}
      <span>
        <em>(Nina Media)</em>
      </span>
      <i>+</i>
    </div>
  );
}

export default Heading;
