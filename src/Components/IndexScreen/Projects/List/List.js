import React from "react";
import Item from "./Item/Item";

function List({projects,leaders,customers}) {
  return (
    <div className="accordion-wrap projects">
      {projects.map(project=>{
        return <Item leaders={leaders} customers={customers} project={project}></Item>
      })}
    </div>
  );
}

export default List;
