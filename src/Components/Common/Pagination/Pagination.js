import React from "react";
import { NavLink } from "react-router-dom";
import Number from "./Number/Number";
function Pagination({numberOfPages,pageNumber,url}) {
  let numbers = new Array(numberOfPages).fill(undefined).map((val, idx) => idx+1);
  return (
    <div className="pagination">
      <ul>
        {numbers.map(value=>{
          return <Number url={`${url}pageNumber=${(value)}`} pageNumber={value}></Number>
        })}
        <li className="last">
          <NavLink to={`${url}pageNumber=${(pageNumber+1>=numberOfPages?1:pageNumber+2)}`}>Next</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
