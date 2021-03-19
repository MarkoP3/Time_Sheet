import React from "react";
import Item from "./Item/Item";

function List({projects,leaders,customers,deleteProjectHandler,updateProjectHandler}) {
  return (
    <div className="accordion-wrap projects">
      {projects.map(project=>{
        return <Item leaders={leaders} deleteProjectHandler={deleteProjectHandler} updateProjectHandler={updateProjectHandler} customers={customers} project={project}></Item>
      })}
    </div>
  );
}

export default List;
