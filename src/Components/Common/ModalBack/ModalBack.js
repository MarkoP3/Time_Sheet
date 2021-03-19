import React from "react";

function ModalBack({ displayValue , changeDisplay }) {
  return (
    <div onClick={e=>changeDisplay("none")}
      id="fancybox-overlay"
      style={{
        backgroundColor: "rgb(119, 119, 119)",
        opacity: "0.7",
        cursor: "pointer",
        height: "100%",
        width:"100%",
        display: displayValue 
      }}
    ></div>
  );
}

export default ModalBack;
