import React,{useRef} from "react";

function Search({changeFilterProjectsText}) {
  const search = useRef("")
  return (
    <div className="search-page">
      <input ref={search} type="search" name="search-clients" className="in-search" onChange={(e)=>changeFilterProjectsText(search.current.value)}/>
    </div>
  );
}

export default Search;
