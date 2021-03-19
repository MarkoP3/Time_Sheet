import React from "react";
import Item from "./Item/Item";

function List({
  updateTeamMemberHandler,
  deleteTeamMemberHandler,
  teamMembers,
}) {
  return (
    <div className="accordion-wrap">
      {teamMembers.map((value) => {
        return (
          <Item
            updateTeamMemberHandler={updateTeamMemberHandler}
            deleteTeamMemberHandler={deleteTeamMemberHandler}
            member={value}
          ></Item>
        );
      })}
    </div>
  );
}

export default List;
