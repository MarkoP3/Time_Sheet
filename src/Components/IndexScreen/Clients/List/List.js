import React from "react";
import Item from "./Item/Item";

function List({updateClientHandler,deleteClientHandler,countries,clients}) {
  return (
    <div className="accordion-wrap clients">
      {clients.map((value,index)=>{
        return <Item updateClientHandler={updateClientHandler} deleteClientHandler={deleteClientHandler} countries={countries} client={value}></Item>
      })}
    </div>
  );
}

export default List;
