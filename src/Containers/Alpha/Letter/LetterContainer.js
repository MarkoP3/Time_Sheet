import React from 'react'
import Letter from '../../../Components/Common/Alpha/Letter/Letter'

function LetterContainer({url, letter,activeLetter,containingLetters }) {

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
              activateMeURL={(activeLetter==letter?url:`${url}?firstLetter=${(containingLetters.includes(letter)?letter:activeLetter)}`)}
            ></Letter>
    )
}

export default LetterContainer
