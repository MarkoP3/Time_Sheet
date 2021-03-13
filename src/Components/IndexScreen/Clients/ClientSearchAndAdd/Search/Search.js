import React, { useRef } from "react";

function Search({changeFilterClientsText}) {
  const search = useRef("")
  return (
    <div className="search-page">
      <input ref={search} type="search" name="search-clients" className="in-search" onChange={(e)=>changeFilterClientsText(search.current.value)} />
    </div>
  );
}

export default Search;
