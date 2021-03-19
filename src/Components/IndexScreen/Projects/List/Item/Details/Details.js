import React,{useEffect,useRef} from "react";
import Form from "./Form/Form";
import $ from 'jquery'
function Details({deleteProjectHandler,updateProjectHandler,open,project ,customers,leaders }) {
  const details = useRef()
  useEffect(() => {
    if(open=="block")
    $(details.current).slideDown('normal');
    else
    $(details.current).slideUp('normal');
  }, [open])
  return (
    <div ref={details} className="details">
      <Form project={project}  customers={customers} leaders={leaders} deleteProjectHandler={deleteProjectHandler} updateProjectHandler={updateProjectHandler}></Form>
    </div>
  );
}

export default Details;
