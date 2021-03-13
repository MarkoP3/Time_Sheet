import React from "react";
import LetterContainer from "../../../Containers/Alpha/Letter/LetterContainer";
import { alphabet } from "../../Helper/Helper";

function Alpha({url, containingLetters, activeLetter }) {
  return (
    <div className="alpha">
      <ul>
        {alphabet.map((value, index) => {
          return (
            <LetterContainer url={url} letter={value} activeLetter={activeLetter} containingLetters={containingLetters} ></LetterContainer>
          );
        })}
      </ul>
    </div>
  );
}

export default Alpha;
