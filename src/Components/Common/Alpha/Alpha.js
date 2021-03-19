import React, { useState,useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import { alphabet, getFirstLetters, mockClients } from "../../Helper/Helper";
import Letter from "./Letter/Letter";

function Alpha({containingLetters,activeLetter} ) {
  const url=window.location.pathname;
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
              activateMeURL={(activeLetter==value?url:`${url}?firstLetter=${(containingLetters.includes(value)?value:activeLetter)}`)}
            ></Letter>
          );
        })}
      </ul>
    </div>
  );
}

export default Alpha;
