import React from 'react'
import FancySides from '../../../../Common/FancySides/FancySides'
import Form from './Form/Form'

function CreateModal({displayValue,changeDisplayModal}) {
    return (
        <div
      id="fancybox-wrap"
      style={{
        width: "470px",
        height: "auto",
        top: "calc( 50% - 201px )",
        left: "calc( 50% - 235px )",
        display:  displayValue ,
      }}
    >
      <div id="fancybox-outer">
        <FancySides></FancySides>
        <Form></Form>
      </div>
      <a
        onClick={(e) => changeDisplayModal("none")}
        id="fancybox-close"
        style={{ display: "inline" }}
      ></a>
      <div id="fancybox-title" style={{display: "none"}}></div>
      <a href="javascript:;" id="fancybox-left" style={{display: "none"}}><span class="fancy-ico" id="fancybox-left-ico"></span></a>
      <a href="javascript:;" id="fancybox-right" style={{display: "none"}}><span class="fancy-ico" id="fancybox-right-ico"></span></a>
    </div>
    )
}

export default CreateModal
