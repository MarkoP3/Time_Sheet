import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  getPageNumbers,
  getPageRows,
  recordPerPage,
} from "../../Components/Helper/Helper";
import TeamMembers from "../../Components/IndexScreen/TeamMembers/TeamMembers";
import teamMemberServices from "../../Services/TeamMemberServices/TeamMemberServices";

function TeamMembersContainer() {
  const [teamMembers, setTeamMembers] = useState([]);
  const filterParams = new URLSearchParams(useLocation().search);
  const [pageNumber, setpageNumber] = useState(
    filterParams.has("pageNumber") ? filterParams.get("pageNumber") - 1 : 0
  );
  const [numberOfPages, setNumberOfPages] = useState([]);
  useEffect(() => {
    teamMemberServices
      .getTeamMemberNumberOfPages(recordPerPage)
      .then((data) => {
        setNumberOfPages(data);
      });
    teamMemberServices
      .getTeamMembersOnPage(pageNumber, recordPerPage)
      .then((data) => {
        if (data.status == 204) setTeamMembers([]);
        else setTeamMembers(data.data);
      });
  }, []);
  useEffect(() => {
    setpageNumber(
      filterParams.has("pageNumber") ? filterParams.get("pageNumber") - 1 : 0
    );
  }, [filterParams]);
  useEffect(() => {
    teamMemberServices
      .getTeamMemberNumberOfPages(recordPerPage)
      .then((data) => {
        setNumberOfPages(data);
      });
  }, [teamMembers]);
  useEffect(() => {
    teamMemberServices
      .getTeamMembersOnPage(pageNumber, recordPerPage)
      .then((data) => {
        if (data.status == 204) setTeamMembers([]);
        else setTeamMembers(data.data);
      });
  }, [pageNumber]);

  function addTeamMember(teamMember) {
    teamMemberServices
      .addTeamMember(teamMember)
      .then((result) => {
        return teamMemberServices.getTeamMembersOnPage(
          pageNumber,
          recordPerPage
        );
      })
      .then((data) => {
        setTeamMembers(data.data);
        console.log("sucessfuly added a team member");
      })
      .catch((error) => {
        console.log("Something wen't wrong try again");
      });
  }
  function updateTeamMember(teamMember) {
    teamMemberServices
      .updateTeamMember(teamMember)
      .then((result) => {
        return teamMemberServices.getTeamMembersOnPage(
          pageNumber,
          recordPerPage
        );
      })
      .then((data) => {
        setTeamMembers(data.data);
        console.log("sucessfuly updated a team member");
      })
      .catch((error) => {
        console.log("Something wen't wrong try again");
      });
  }
  function deleteTeamMember(teamMemberID) {
    setNumberOfPages(0);
    teamMemberServices
      .deleteTeamMember(teamMemberID)
      .then((result) => {
        return teamMemberServices.getTeamMembersOnPage(
          pageNumber,
          recordPerPage
        );
      })
      .then((data) => {
        if (data.status == 204) setTeamMembers([]);
        else setTeamMembers(data.data);
        console.log("sucessfuly deleted a team member");
      })
      .catch((error) => {
        console.log("Something wen't wrong try again");
      });
  }
  return (
    <TeamMembers
      numberOfPages={numberOfPages}
      pageNumber={pageNumber}
      teamMembers={teamMembers}
      addTeamMemberHandler={addTeamMember}
      updateTeamMemberHandler={updateTeamMember}
      deleteTeamMemberHandler={deleteTeamMember}
    ></TeamMembers>
  );
}

export default TeamMembersContainer;
