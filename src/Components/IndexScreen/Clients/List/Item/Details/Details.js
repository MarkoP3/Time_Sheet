import React from "react";
import Buttons from "./Buttons/Buttons";
import Form from "./Form/Form";

function Details({countries, active, client }) {
  return (
    <div className="details" style={{ display: active }}>
      <Form countries={countries} client={client}></Form>
      <Buttons></Buttons>
    </div>
  );
}

export default Details;
