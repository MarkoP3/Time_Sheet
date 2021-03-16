import React,{useEffect,useState} from "react";
import { useLocation, useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import {  getPageNumbers, recordPerPage } from "../../Helper/Helper";
import Number from "./Number/Number";
function Pagination() {

  const history = useHistory();
  const filterParams = new URLSearchParams(useLocation().search);

  const [activeFilterLetter, setactiveFilterLetter] = useState(
    filterParams.has("firstLetter") ? filterParams.get("firstLetter") : ""
  );
  const [pageNumber, setpageNumber] = useState(
    filterParams.has("pageNumber") ? filterParams.get("pageNumber") - 1 : 0
  );
  const [filterText, setFilterText] = useState(
    filterParams.has("filterText") ? filterParams.get("filterText") : ""
  );
  const url=`${window.location.pathname}?${
    activeFilterLetter == ""
      ? `filterText=${filterText}&`
      : `firstLetter=${activeFilterLetter}&`
  }pageNumber=`;
  useEffect(() => {
    setNumberOfPages(Math.ceil(getPageNumbers(activeFilterLetter,filterText,window.location.pathname) / recordPerPage));
  }, [activeFilterLetter,pageNumber,filterText]);
  const [numberOfPages, setNumberOfPages] = useState(
    Math.ceil(getPageNumbers(activeFilterLetter,filterText,window.location.pathname) / recordPerPage)
  );
  useEffect(() => {
    setpageNumber(
      filterParams.has("pageNumber") ? filterParams.get("pageNumber") - 1 : 0
    );
    setactiveFilterLetter(
      filterParams.has("firstLetter") ? filterParams.get("firstLetter") : ""
    );
    setFilterText(
      filterParams.has("filterText") ? filterParams.get("filterText") : ""
    );
  }, [filterParams]);
  
  let numbers = new Array(numberOfPages).fill(undefined).map((val, idx) => idx+1);
  return (
    <div className="pagination">
      <ul>
      
        {numbers.map(value=>{
          return <Number url={`${url}${(value)}`} pageNumber={value}></Number>
        })}
        <li className="last">
          <NavLink to={`${url}${(pageNumber+1>=numberOfPages?1:pageNumber+2)}`}>Next</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Pagination;
