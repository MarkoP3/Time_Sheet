import React, { useEffect,useRef } from "react";

function Form({member}) {
  console.log(`member`, member)
  const admin = useRef()
  const worker = useRef()
  const inactive = useRef()
  const active = useRef()
  const status={"Inactive":inactive,"Active":active}
  const role={"Admin":admin,"Worker":worker}
  useEffect(() => {
    status[member.status].current.checked=true;
    role[member.role].current.checked=true;
  }, [member])
  return (
    <React.Fragment>
      <ul className="form">
        <li>
          <label>Name:</label>
          <input type="text" className="in-text" value={member?.name} />
        </li>
        <li>
          <label>Hours per week:</label>
          <input type="text" className="in-text" value={member?.hoursPerWeek} />
        </li>
      </ul>
      <ul className="form">
        <li>
          <label>Username:</label>
          <input type="text" className="in-text" value={member?.username}/>
        </li>
        <li>
          <label>Email:</label>
          <input type="text" className="in-text" value={member?.username}/>
        </li>
      </ul>
      <ul className="form last">
        <li>
          <label>Status:</label>
          <span className="radio">
            <label for="inactive">Inactive:</label>
            <input ref={inactive} type="radio" value="1" name={`status${member?.id}`} id="inactive" />
          </span>
          <span className="radio">
            <label for="active">Active:</label>
            <input ref={active} type="radio" value="2" name={`status${member?.id}`} id="active" />
          </span>
        </li>
        <li>
          <label>Role:</label>
          <span className="radio">
            <label for="admin">Admin:</label>
            <input ref={admin} type="radio" value="1" name={`role${member?.id}`} id="admin" />
          </span>
          <span className="radio">
            <label for="worker">Worker:</label>
            <input ref={worker} type="radio" value="2" name={`role${member?.id}`} id="worker" />
          </span>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Form;
