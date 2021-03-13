import React from "react";
import Buttons from "./Buttons/Buttons";
import Form from "./Form/Form";

function Details({ active,project ,customers,leaders }) {
  return (
    <div className="details" style={{ display: active }}>
      <Form project={project} customers={customers} leaders={leaders}></Form>
      <Buttons></Buttons>
    </div>
  );
}

export default Details;
