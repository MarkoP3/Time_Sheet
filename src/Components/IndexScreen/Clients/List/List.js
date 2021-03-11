import React from "react";
import Item from "./Item/Item";

function List({clients}) {
  return (
    <div className="accordion-wrap clients">
      {clients.map((value,index)=>{
        return <Item client={value}></Item>
      })}
    </div>
  );
}

export default List;
