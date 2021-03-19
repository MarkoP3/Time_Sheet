import React, { useRef, useEffect } from "react";
import Form from "./Form/Form";
import $ from "jquery";
function Details({
  deleteTeamMemberHandler,
  updateTeamMemberHandler,
  open,
  member,
}) {
  const details = useRef();
  useEffect(() => {
    if (open == "block") $(details.current).slideDown("normal");
    else $(details.current).slideUp("normal");
  }, [open]);
  return (
    <div ref={details} className="details">
      <Form
        updateTeamMemberHandler={updateTeamMemberHandler}
        deleteTeamMemberHandler={deleteTeamMemberHandler}
        member={member}
      ></Form>
    </div>
  );
}

export default Details;
