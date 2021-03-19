import React from "react";
import Pagination from "../../Common/Pagination/Pagination";
import List from "./List/List";
import Title from "../../Common/Title/Title";
import AddMemberBox from "./AddMemberBox/AddMemberBox";

function TeamMembers({
  addTeamMemberHandler,
  updateTeamMemberHandler,
  deleteTeamMemberHandler,
  numberOfPages,
  pageNumber,
  teamMembers,
}) {
  return (
    <div className="wrapper">
      <section className="content">
        <Title title="Team Members"></Title>
        <AddMemberBox
          addTeamMemberHandler={addTeamMemberHandler}
        ></AddMemberBox>
        <List
          updateTeamMemberHandler={updateTeamMemberHandler}
          deleteTeamMemberHandler={deleteTeamMemberHandler}
          teamMembers={teamMembers}
        ></List>
        <Pagination
          numberOfPages={numberOfPages}
          pageNumber={pageNumber}
          activeFilterLetter={""}
          filterText={""}
        ></Pagination>
      </section>
    </div>
  );
}

export default TeamMembers;
