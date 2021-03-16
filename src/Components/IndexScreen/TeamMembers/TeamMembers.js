import React from "react";
import Pagination from "../../Common/Pagination/Pagination";
import List from "./List/List";
import Title from "../../Common/Title/Title";
import AddMemberBox from "./AddMemberBox/AddMemberBox";

function TeamMembers({url,numberOfPages,pageNumber,teamMembers}) {
  return (
    <div className="wrapper">
      <section className="content">
        <Title title="Team Members"></Title>
        <AddMemberBox></AddMemberBox>
        <List teamMembers={teamMembers}></List>
        <Pagination numberOfPages={numberOfPages} pageNumber={pageNumber} url={url}></Pagination>
      </section>
    </div>
  );
}

export default TeamMembers;
