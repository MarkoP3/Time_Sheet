import React from "react";

function Letter({ letter, letterStyle, changeActive, filter }) {
  return (
    <li className={letterStyle}>
      <a
        href="javascript:;"
        onClick={(e) => {
          if (letterStyle == "") {
            changeActive(letter);
            filter(letter);
          } else {
            changeActive("");
            filter("");
          }
        }}
      >
        {letter}
      </a>
    </li>
  );
}

export default Letter;
