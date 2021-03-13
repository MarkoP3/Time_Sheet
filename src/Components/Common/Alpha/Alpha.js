import React from "react";
import LetterContainer from "../../../Containers/Alpha/Letter/LetterContainer";
import { alphabet } from "../../Helper/Helper";

function Alpha({ containingLetters, activeLetter, changeActive }) {
  return (
    <div className="alpha">
      <ul>
        {alphabet.map((value, index) => {
          return (
            <LetterContainer letter={value} activeLetter={activeLetter} containingLetters={containingLetters} changeActive={changeActive}></LetterContainer>
          );
        })}
      </ul>
    </div>
  );
}

export default Alpha;
