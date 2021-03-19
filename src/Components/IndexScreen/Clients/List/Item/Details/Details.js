import React,{useRef,useEffect} from "react";
import Form from "./Form/Form";
import $ from 'jquery'

function Details({updateClientHandler,deleteClientHandler,countries, client,open }) {
  const details = useRef()
  useEffect(() => {
    if(open=="block")
    $(details.current).slideDown('normal');
    else
    $(details.current).slideUp('normal');
  }, [open])
  return (
    <div ref={details} className="details">
      <Form updateClientHandler={updateClientHandler} deleteClientHandler={deleteClientHandler} countries={countries} client={client}></Form>
    </div>
  );
}

export default Details;
