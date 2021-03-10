import React from "react";
import Add from "./Add/Add";
import Search from "./Search/Search";

function SearchAndAddBox() {
  return (
    <div className="grey-box-wrap reports">
      <Add></Add>
      <Search></Search>
    </div>
  );
}

export default SearchAndAddBox;
