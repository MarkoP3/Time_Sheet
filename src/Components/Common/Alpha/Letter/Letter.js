import React from "react";
import { Link } from "react-router-dom";
/*
    <a
        href="javascript:;"
        onClick={(e) => changeActive()}
      >
        {letter}
      </a>
*/
function Letter({ letter, letterStyle, activateMeURL }) {
  return (
    <li className={letterStyle}>

 <Link to={activateMeURL}>{letter}</Link>
    </li>
  );
}

export default Letter;
