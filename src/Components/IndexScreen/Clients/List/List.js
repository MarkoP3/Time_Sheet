import React from "react";
import Item from "./Item/Item";

function List({countries,clients}) {
  return (
    <div className="accordion-wrap clients">
      {clients.map((value,index)=>{
        return <Item countries={countries} client={value}></Item>
      })}
    </div>
  );
}

export default List;
