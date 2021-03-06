import React, { useState } from "react";
import ModalBack from "../../../Common/ModalBack/ModalBack";
import Add from "./Add/Add";
import CreateModal from "./CreateModal/CreateModal";

function AddMemberBox({ addTeamMemberHandler }) {
  const [modalDisplay, setmodalDisplay] = useState("none");
  function changeDisplayModalVal(displayVal) {
    setmodalDisplay(displayVal);
  }
  return (
    <div className="grey-box-wrap reports ico-member">
      <Add changeDisplayModalVal={changeDisplayModalVal}></Add>
      <ModalBack
        displayValue={modalDisplay}
        changeDisplay={changeDisplayModalVal}
      ></ModalBack>
      <CreateModal
        addTeamMemberHandler={addTeamMemberHandler}
        displayValue={modalDisplay}
        changeDisplayModal={changeDisplayModalVal}
      ></CreateModal>
    </div>
  );
}

export default AddMemberBox;
