import React,{useRef} from "react";

function Search({changeFilterProjectsText,filterText}) {
  const search = useRef("")
  return (
    <div className="search-page">
      <input ref={search} type="search" name="search-clients" className="in-search" onChange={(e)=>changeFilterProjectsText(search.current.value)} value={filterText}/>
    </div>
  );
}

export default Search;
