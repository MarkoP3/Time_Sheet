import React from "react";
import Letter from "./Letter/Letter";

function Alpha({ containingLetters, activeLetter, changeActive, filter }) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  return (
    <div className="alpha">
      <ul>
        {alphabet.map((value, index) => {
          return (
            <Letter
              letter={value}
              letterStyle={
                containingLetters.includes(value)
                  ? value == activeLetter
                    ? "active"
                    : ""
                  : "disabled"
              }
              changeActive={changeActive}
              filter={filter}
            ></Letter>
          );
        })}
      </ul>
    </div>
  );
}

export default Alpha;
