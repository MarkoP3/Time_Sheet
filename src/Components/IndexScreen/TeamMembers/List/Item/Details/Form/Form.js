import React from "react";

function Form() {
  return (
    <React.Fragment>
      <ul className="form">
        <li>
          <label>Name:</label>
          <input type="text" className="in-text" />
        </li>
        <li>
          <label>Hours per week:</label>
          <input type="text" className="in-text" />
        </li>
      </ul>
      <ul className="form">
        <li>
          <label>Username:</label>
          <input type="text" className="in-text" />
        </li>
        <li>
          <label>Email:</label>
          <input type="text" className="in-text" />
        </li>
      </ul>
      <ul className="form last">
        <li>
          <label>Status:</label>
          <span className="radio">
            <label for="inactive">Inactive:</label>
            <input type="radio" value="1" name="status" id="inactive" />
          </span>
          <span className="radio">
            <label for="active">Active:</label>
            <input type="radio" value="2" name="status" id="active" />
          </span>
        </li>
        <li>
          <label>Role:</label>
          <span className="radio">
            <label for="admin">Admin:</label>
            <input type="radio" value="1" name="status" id="admin" />
          </span>
          <span className="radio">
            <label for="worker">Worker:</label>
            <input type="radio" value="2" name="status" id="worker" />
          </span>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Form;
