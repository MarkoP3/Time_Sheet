import React from "react";
import Item from "./Item/Item";

function List({teamMembers}) {
  console.log(`teamMembers`, teamMembers)
  return (
    <div className="accordion-wrap">
      {teamMembers.map(value=>{
        return <Item member={value}></Item>
      })

      }
    </div>
  );
}

export default List;
