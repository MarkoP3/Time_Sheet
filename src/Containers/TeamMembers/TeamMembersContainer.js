import React,{useEffect,useState} from 'react'
import { useLocation } from "react-router-dom";
import { getPageNumbers, getPageRows, recordPerPage } from '../../Components/Helper/Helper';
import TeamMembers from '../../Components/IndexScreen/TeamMembers/TeamMembers'

function TeamMembersContainer() {
    const [teamMembers, setTeamMembers] = useState(getPageRows(0,"","","/teamMembers"))
    const filterParams = new URLSearchParams(useLocation().search);
    const [pageNumber, setpageNumber] = useState(
        filterParams.has("pageNumber") ? filterParams.get("pageNumber") - 1 : 0
      );
      const [numberOfPages, setNumberOfPages] = useState(
        getPageNumbers("","","/teamMembers")
      );
      useEffect(() => {
        setpageNumber(
          filterParams.has("pageNumber") ? filterParams.get("pageNumber") - 1 : 0
        );
      }, [filterParams]);
      useEffect(() => {
        setTeamMembers(getPageRows(pageNumber,"","","/teamMembers"))
      }, [pageNumber]);
    return (
        <TeamMembers
      url={`/teamMembers?`}
      numberOfPages={numberOfPages}
      pageNumber={pageNumber}
      teamMembers={teamMembers}
     > </TeamMembers>
    )
}

export default TeamMembersContainer
