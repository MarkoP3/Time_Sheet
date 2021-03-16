import React from "react";

function Add({changeDisplayModalVal}) {
  return (
    <a onClick={e=>changeDisplayModalVal("block")} href="#new-member" className="link new-member-popup test">
      <span>Create new member</span>
    </a>
  );
}

export default Add;
