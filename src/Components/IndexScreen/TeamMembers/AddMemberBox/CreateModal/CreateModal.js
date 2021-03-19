import React, { useState, useRef, useEffect } from "react";
import FancySides from "../../../../Common/FancySides/FancySides";
import Form from "./Form/Form";

function CreateModal({
  addTeamMemberHandler,
  displayValue,
  changeDisplayModal,
}) {
  const [height, setheight] = useState();
  const [width, setwidth] = useState();
  const form = useRef();
  useEffect(() => {
    setheight(form.current.clientHeight);
    setwidth(form.current.clientWidth);
  }, [displayValue]);
  return (
    <div
      id="fancybox-wrap"
      style={{
        width: "470px",
        maxWidth: "100%",
        padding: "0px",
        top: `calc( 50% - ${height / 2}px)`,
        left: `calc( 50% - ${width / 2}px)`,
        display: displayValue,
      }}
    >
      <div id="fancybox-outer" ref={form}>
        <FancySides></FancySides>
        <Form
          addTeamMemberHandler={addTeamMemberHandler}
          changeDisplayModal={changeDisplayModal}
        ></Form>
      </div>
      <a
        onClick={(e) => changeDisplayModal("none")}
        id="fancybox-close"
        style={{ display: "inline" }}
      ></a>
      <div id="fancybox-title" style={{ display: "none" }}></div>
      <a href="javascript:;" id="fancybox-left" style={{ display: "none" }}>
        <span class="fancy-ico" id="fancybox-left-ico"></span>
      </a>
      <a href="javascript:;" id="fancybox-right" style={{ display: "none" }}>
        <span class="fancy-ico" id="fancybox-right-ico"></span>
      </a>
    </div>
  );
}

export default CreateModal;
