import React, { useRef } from "react";

function Form({ addTeamMemberHandler, changeDisplayModal }) {
  const name = useRef();
  const hoursPerWeek = useRef();
  const username = useRef();
  const email = useRef();
  const adminRole = useRef();
  const activeStatus = useRef();
  function handleSave(e) {
    if (
      name.current.value != "" &&
      hoursPerWeek.current.value != "" &&
      username.current.value != "" &&
      email.current.value != ""
    ) {
      const role = adminRole.current.checked ? "Admin" : "Worker";
      const status = activeStatus.current.checked ? "Active" : "Inactive";
      addTeamMemberHandler({
        name: name.current.value,
        hoursPerWeek: hoursPerWeek.current.value,
        username: username.current.value,
        email: email.current.value,
        role: role,
        status: status,
      });
      changeDisplayModal("none");
      name.current.value = "";
      hoursPerWeek.current.value = "";
      username.current.value = "";
      email.current.value = "";
    } else {
      alert("Enter valid field values");
    }
  }
  return (
    <div
      id="fancybox-content"
      style={{
        borderWidth: "10px",
        width: "450px",
        height: "auto",
        maxWidth: "100%",
      }}
    >
      <div
        style={{
          width: "auto",
          height: "auto",
          overflow: "auto",
          position: "relative",
        }}
      >
        <div
          id="new-member"
          class="new-member-inner"
          style={{ maxWidth: "100%" }}
        >
          <h2>Create new team member</h2>
          <ul class="form">
            <li>
              <label>Name:</label>
              <input ref={name} type="text" class="in-text" />
            </li>
            <li>
              <label>Hours per week:</label>
              <input ref={hoursPerWeek} type="text" class="in-text" />
            </li>
            <li>
              <label>Username:</label>
              <input ref={username} type="text" class="in-text" />
            </li>
            <li>
              <label>Email:</label>
              <input ref={email} type="text" class="in-text" />
            </li>
            <li class="inline">
              <label>Status:</label>
              <span class="radio">
                <label for="inactive">Inactive:</label>
                <input type="radio" value="1" name="status" id="inactive" />
              </span>
              <span class="radio">
                <label for="active">Active:</label>
                <input
                  ref={activeStatus}
                  type="radio"
                  value="2"
                  name="status"
                  id="active"
                  checked
                />
              </span>
            </li>
            <li class="inline">
              <label>Role:</label>
              <span class="radio">
                <label for="admin">Admin:</label>
                <input
                  ref={adminRole}
                  type="radio"
                  value="1"
                  name="role"
                  id="admin"
                />
              </span>
              <span class="radio">
                <label for="worker">Worker:</label>
                <input type="radio" value="2" name="role" id="worker" checked />
              </span>
            </li>
          </ul>
          <div class="buttons">
            <div class="inner">
              <a href="javascript:;" class="btn green" onClick={handleSave}>
                Invite team member
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
