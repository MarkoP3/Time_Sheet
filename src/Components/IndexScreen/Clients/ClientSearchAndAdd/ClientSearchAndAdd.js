import React, { useState } from "react";
import ModalBack from "../../../Common/ModalBack/ModalBack";
import Add from "./Add/Add";
import CreateModal from "./CreateModal/CreateModal";
import Search from "./Search/Search";

function ClientSearchAndAdd({countries,changeFilterClientsText,filterText}) {
  const [modalDisplay, setmodalDisplay] = useState("none");
  function changeDisplayModalVal(displayVal) {
    setmodalDisplay(displayVal);
  }
  return (
    <div className="grey-box-wrap reports">
      <Add changeModalDisplay={changeDisplayModalVal}></Add>
      <Search changeFilterClientsText={changeFilterClientsText} filterText={filterText}></Search>
      <ModalBack
        displayValue={modalDisplay}
        changeDisplay={changeDisplayModalVal}
      ></ModalBack>
      <CreateModal countries={countries}
        displayValue={modalDisplay}
        changeDisplayModal={changeDisplayModalVal}
      ></CreateModal>
    </div>
  );
}

export default ClientSearchAndAdd;
