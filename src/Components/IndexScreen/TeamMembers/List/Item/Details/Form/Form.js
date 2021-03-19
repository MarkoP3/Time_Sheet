import React, { useEffect, useRef, useState } from "react";

function Form({ updateTeamMemberHandler, deleteTeamMemberHandler, member }) {
  const admin = useRef();
  const worker = useRef();
  const inactive = useRef();
  const active = useRef();
  const status = { Inactive: inactive, Active: active };
  const role = { Admin: admin, Worker: worker };
  const [name, setname] = useState(member.name);
  const [hoursPerWeek, sethoursPerWeek] = useState(member.hoursPerWeek);
  const [username, setusername] = useState(member.username);
  const [email, setemail] = useState(member.email);
  useEffect(() => {
    status[member.status].current.checked = true;
    role[member.role].current.checked = true;
    setname(member.name);
    sethoursPerWeek(member.hoursPerWeek);
    setusername(member.username);
    setemail(member.email);
  }, [member]);
  function saveHandler(e) {
    const memberrole = role["Admin"].current.checked ? "Admin" : "Worker";
    const memberstatuse = status["Inactive"].current.checked
      ? "Inactive"
      : "Active";
    updateTeamMemberHandler({
      id: member.id,
      name: name,
      hoursPerWeek: hoursPerWeek,
      username: username,
      email: email,
      role: memberrole,
      status: memberstatuse,
    });
  }
  return (
    <React.Fragment>
      <ul className="form">
        <li>
          <label>Name:</label>
          <input
            type="text"
            className="in-text"
            onChange={(e) => setname(e.target.value)}
            value={name}
          />
        </li>
        <li>
          <label>Hours per week:</label>
          <input
            type="number"
            className="in-text"
            onChange={(e) => sethoursPerWeek(e.target.value)}
            value={hoursPerWeek}
          />
        </li>
      </ul>
      <ul className="form">
        <li>
          <label>Username:</label>
          <input
            type="text"
            className="in-text"
            onChange={(e) => setusername(e.target.value)}
            value={username}
          />
        </li>
        <li>
          <label>Email:</label>
          <input
            type="text"
            className="in-text"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
        </li>
      </ul>
      <ul className="form last">
        <li>
          <label>Status:</label>
          <span className="radio">
            <label for="inactive">Inactive:</label>
            <input
              ref={inactive}
              type="radio"
              value="1"
              name={`status${member?.id}`}
              id="inactive"
            />
          </span>
          <span className="radio">
            <label for="active">Active:</label>
            <input
              ref={active}
              type="radio"
              value="2"
              name={`status${member?.id}`}
              id="active"
            />
          </span>
        </li>
        <li>
          <label>Role:</label>
          <span className="radio">
            <label for="admin">Admin:</label>
            <input
              ref={admin}
              type="radio"
              value="1"
              name={`role${member?.id}`}
              id="admin"
            />
          </span>
          <span className="radio">
            <label for="worker">Worker:</label>
            <input
              ref={worker}
              type="radio"
              value="2"
              name={`role${member?.id}`}
              id="worker"
            />
          </span>
        </li>
      </ul>
      <div className="buttons">
        <div className="inner">
          <a href="javascript:;" className="btn green" onClick={saveHandler}>
            Save
          </a>
          <a
            href="javascript:;"
            className="btn red"
            onClick={(e) => deleteTeamMemberHandler(member.id)}
          >
            Delete
          </a>
          <a href="javascript:;" className="btn orange">
            Reset Password
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Form;
