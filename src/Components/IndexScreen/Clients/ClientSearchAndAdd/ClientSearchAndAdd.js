import React, { useState } from "react";
import ModalBack from "../../../Common/ModalBack/ModalBack";
import Add from "./Add/Add";
import CreateModal from "./CreateModal/CreateModal";
import Search from "./Search/Search";

function ClientSearchAndAdd({changeFilterClientsText}) {
  const [modalDisplay, setmodalDisplay] = useState("none");
  function changeDisplayModalVal(displayVal) {
    setmodalDisplay(displayVal);
  }
  return (
    <div className="grey-box-wrap reports">
      <Add changeModalDisplay={changeDisplayModalVal}></Add>
      <Search changeFilterClientsText={changeFilterClientsText}></Search>
      <ModalBack
        displayValue={modalDisplay}
        changeDisplay={changeDisplayModalVal}
      ></ModalBack>
      <CreateModal
        displayValue={modalDisplay}
        changeDisplayModal={changeDisplayModalVal}
      ></CreateModal>
    </div>
  );
}

export default ClientSearchAndAdd;
