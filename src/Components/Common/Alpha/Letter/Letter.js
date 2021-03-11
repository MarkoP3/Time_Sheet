import React from "react";

function Letter({ letter, letterStyle, changeActive }) {
  console.log(`${letter} ${letterStyle}`);
  return (
    <li className={letterStyle}>
      <a href="javascript:;" onClick={(e) => changeActive(letter)}>
        {letter}
      </a>
    </li>
  );
}

export default Letter;
