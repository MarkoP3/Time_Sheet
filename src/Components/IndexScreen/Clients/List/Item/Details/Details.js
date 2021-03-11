import React from "react";
import Buttons from "./Buttons/Buttons";
import Form from "./Form/Form";

function Details({ active, client }) {
  return (
    <div className="details" style={{ display: active }}>
      <Form client={client}></Form>
      <Buttons></Buttons>
    </div>
  );
}

export default Details;
