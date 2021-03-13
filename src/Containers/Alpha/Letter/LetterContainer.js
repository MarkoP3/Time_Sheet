import React from 'react'
import Letter from '../../../Components/Common/Alpha/Letter/Letter'

function LetterContainer({ letter,activeLetter,containingLetters }) {

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
              activateMeURL={(activeLetter==letter?`/clients`:`/clients?firstLetter=${(containingLetters.includes(letter)?letter:activeLetter)}`)}
            ></Letter>
    )
}

export default LetterContainer
