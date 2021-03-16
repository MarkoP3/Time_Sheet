import React from "react";

function Form() {
  return (
    <div
      id="fancybox-content"
      style={{ borderWidth: "10px", width: "450px", height: "auto" }}
    >
      <div
        style={{
          width: "auto",
          height: "auto",
          overflow: "auto",
          position: "relative",
        }}
      >
        <div id="new-member" class="new-member-inner">
          <h2>Create new team member</h2>
          <ul class="form">
            <li>
              <label>Name:</label>
              <input type="text" class="in-text" />
            </li>
            <li>
              <label>Hours per week:</label>
              <input type="text" class="in-text" />
            </li>
            <li>
              <label>Username:</label>
              <input type="text" class="in-text" />
            </li>
            <li>
              <label>Email:</label>
              <input type="text" class="in-text" />
            </li>
            <li class="inline">
              <label>Status:</label>
              <span class="radio">
                <label for="inactive">Inactive:</label>
                <input type="radio" value="1" name="status" id="inactive" />
              </span>
              <span class="radio">
                <label for="active">Active:</label>
                <input type="radio" value="2" name="status" id="active" />
              </span>
            </li>
            <li class="inline">
              <label>Role:</label>
              <span class="radio">
                <label for="admin">Admin:</label>
                <input type="radio" value="1" name="status" id="admin" />
              </span>
              <span class="radio">
                <label for="worker">Worker:</label>
                <input type="radio" value="2" name="status" id="worker" />
              </span>
            </li>
          </ul>
          <div class="buttons">
            <div class="inner">
              <a href="javascript:;" class="btn green">
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
