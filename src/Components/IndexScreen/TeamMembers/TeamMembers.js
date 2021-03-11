import React from "react";
import Pagination from "../../Common/Pagination/Pagination";
import List from "./List/List";
import Title from "../../Common/Title/Title";
import AddMemberBox from "./AddMemberBox/AddMemberBox";

function TeamMembers() {
  return (
    <div className="wrapper">
      <section className="content">
        <Title title="Team Members"></Title>
        <AddMemberBox></AddMemberBox>
        <List></List>
        <Pagination></Pagination>
      </section>
    </div>
  );
}

export default TeamMembers;
