import React from "react";
import Buttons from "./Buttons/Buttons";
import Form from "./Form/Form";

function Details({ active ,member}) {
  return (
    <div className="details" style={{ display: active }}>
      <Form member={member}></Form>
      <Buttons></Buttons>
    </div>
  );
}

export default Details;
