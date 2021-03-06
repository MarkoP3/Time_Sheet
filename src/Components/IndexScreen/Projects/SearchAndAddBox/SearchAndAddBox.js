import React, { useState } from "react";
import Add from "./Add/Add";
import Search from "./Search/Search";
import ModalBack from "../../../Common/ModalBack/ModalBack";
import CreateModal from "./CreateModal/CreateModal";

function SearchAndAddBox({
  leaders,
  customers,
  addProjectHandler,
  changeFilterProjectsText,
}) {
  const [modalDisplay, setmodalDisplay] = useState("none");
  function changeDisplayModalVal(displayVal) {
    setmodalDisplay(displayVal);
  }
  return (
    <div className="grey-box-wrap reports">
      <Add changeModalDisplay={changeDisplayModalVal}></Add>
      <Search changeFilterProjectsText={changeFilterProjectsText}></Search>
      <ModalBack
        displayValue={modalDisplay}
        changeDisplay={changeDisplayModalVal}
      ></ModalBack>

      <CreateModal
        leaders={leaders}
        customers={customers}
        addProjectHandler={addProjectHandler}
        displayValue={modalDisplay}
        changeDisplayModal={changeDisplayModalVal}
      ></CreateModal>
    </div>
  );
}

export default SearchAndAddBox;
