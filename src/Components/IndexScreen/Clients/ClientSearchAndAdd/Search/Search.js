import React, { useRef } from "react";

function Search({changeFilterClientsText,filterText}) {
  const search = useRef("")
  return (
    <div className="search-page">
      <input ref={search} type="search" name="search-clients" className="in-search" onChange={(e)=>changeFilterClientsText(search.current.value)} value={filterText} />
    </div>
  );
}

export default Search;
