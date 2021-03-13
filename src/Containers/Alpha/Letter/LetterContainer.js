import React from 'react'
import Letter from '../../../Components/Common/Alpha/Letter/Letter'

function LetterContainer({ letter,activeLetter,containingLetters,changeActive }) {
  function changeActiveLetter()
  {
      if (activeLetter != letter) {
        changeActive(letter);
      } else {
        changeActive("");
      } 
  }
    return (
        <Letter
              letter={letter}
              letterStyle={
                containingLetters.includes(letter)
                  ? letter == activeLetter
                    ? "active"
                    : ""
                  : "disabled"
              }
              activeMeURL={(activeLetter==letter?`/clients`:`/clients?firstLetter=${letter}`)}
              changeActive={changeActiveLetter}
            ></Letter>
    )
}

export default LetterContainer
