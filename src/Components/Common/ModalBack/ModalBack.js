import React from "react";

function ModalBack({ displayValue , changeDisplay }) {
  return (
    <div onClick={e=>changeDisplay("none")}
      id="fancybox-overlay"
      style={{
        backgroundColor: "rgb(119, 119, 119)",
        opacity: "0.7",
        cursor: "pointer",
        height: "722px",
        display: displayValue ,
      }}
    ></div>
  );
}

export default ModalBack;
