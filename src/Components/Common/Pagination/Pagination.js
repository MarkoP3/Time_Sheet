import React from "react";
import { Next } from "react-bootstrap/esm/PageItem";
import Number from "./Number/Number";
function Pagination({numberOfPages,pageNumber,url}) {
  let numbers = new Array(numberOfPages).fill(undefined).map((val, idx) => idx+1);
  console.log('numbers', numbers)
  return (
    <div className="pagination">
      <ul>
        {numbers.map(value=>{
          return <Number url={`${url}${(value)}`} pageNumber={value}></Number>
        })}
        <Next url={`${url}${(pageNumber+1>=numberOfPages?1:pageNumber+2)}`}></Next>
      </ul>
    </div>
  );
}

export default Pagination;
