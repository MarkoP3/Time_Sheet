import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
function ReportFilterField({
  clients,
  projects,
  categories,
  teamMembers,
  clientSelectionHandler,
}) {
  function changeUrlHandler(e) {
    seturl(
      `/reports?search=true&filterTeamMember=${
        member.current.selectedIndex == 0
          ? ""
          : member.current[member.current.selectedIndex].value
      }&filterClient=${
        client.current.selectedIndex == 0
          ? ""
          : client.current[client.current.selectedIndex].value
      }&filterProject=${
        project.current.selectedIndex == 0
          ? ""
          : project.current[project.current.selectedIndex].value
      }&filterCategory=${
        category.current.selectedIndex == 0
          ? ""
          : category.current[category.current.selectedIndex].value
      }&startDate=${startDate.current.value}&endDate=${endDate.current.value}`
    );
  }
  const startDate = useRef();
  const endDate = useRef();
  const client = useRef();
  const member = useRef();
  const project = useRef();
  const category = useRef();
  const form = useRef();
  const [url, seturl] = useState(`/reports`);
  return (
    <form ref={form}>
      <div className="grey-box-wrap reports">
        <ul className="form">
          <li>
            <label>Team member:</label>
            <select ref={member}>
              <option>All</option>
              {teamMembers.map((el) => {
                return <option value={el.id}>{el.name}</option>;
              })}
            </select>
          </li>
          <li>
            <label>Category:</label>
            <select ref={category}>
              <option>All</option>
              {categories.map((el) => {
                return <option value={el.id}>{el.name}</option>;
              })}
            </select>
          </li>
        </ul>
        <ul className="form">
          <li>
            <label>Client:</label>
            <select
              ref={client}
              onChange={(e) =>
                clientSelectionHandler(
                  client.current[client.current.selectedIndex].value
                )
              }
            >
              <option>All</option>
              {clients.map((el) => {
                return <option value={el.id}>{el.name}</option>;
              })}
            </select>
          </li>
          <li>
            <label>Start date:</label>
            <input
              ref={startDate}
              type="date"
              className="in-text datepicker hasDatepicker"
              id="dp1615325172180"
            />
          </li>
        </ul>
        <ul className="form last">
          <li>
            <label>Project:</label>
            <select ref={project}>
              <option>All</option>
              {projects?.map((el) => {
                return <option value={el.id}>{el.name}</option>;
              })}
            </select>
          </li>
          <li>
            <label>End date:</label>
            <input
              ref={endDate}
              type="date"
              className="in-text datepicker hasDatepicker"
              id="dp1615325172181"
            />
          </li>
          <li>
            <Link
              to={"/reports"}
              className="btn orange right"
              onClick={(e) => {
                form.current.reset();
              }}
            >
              Reset
            </Link>
            <Link
              to={url}
              className="btn green right"
              onMouseOver={(e) => changeUrlHandler()}
            >
              Search
            </Link>
          </li>
        </ul>
      </div>
    </form>
  );
}

export default ReportFilterField;
