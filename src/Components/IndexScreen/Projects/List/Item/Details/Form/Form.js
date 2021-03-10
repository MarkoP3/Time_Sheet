import React from "react";

function Form() {
  return (
    <React.Fragment>
      <ul className="form">
        <li>
          <label>Project name:</label>
          <input type="text" className="in-text" />
        </li>
        <li>
          <label>Lead:</label>
          <select>
            <option>Select lead</option>
            <option>Sasa Popovic</option>
            <option>Sladjana Miljanovic</option>
          </select>
        </li>
      </ul>
      <ul className="form">
        <li>
          <label>Description:</label>
          <input type="text" className="in-text" />
        </li>
      </ul>
      <ul className="form last">
        <li>
          <label>Customer:</label>
          <select>
            <option>Select customer</option>
            <option>Adam Software NV</option>
            <option>Clockwork</option>
            <option>Emperor Design</option>
          </select>
        </li>
        <li className="inline">
          <label>Status:</label>
          <span className="radio">
            <label for="inactive">Active:</label>
            <input type="radio" value="1" name="status" id="inactive" />
          </span>
          <span className="radio">
            <label for="active">Inactive:</label>
            <input type="radio" value="2" name="status" id="active" />
          </span>
          <span className="radio">
            <label for="active">Archive:</label>
            <input type="radio" value="3" name="status" id="active" />
          </span>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Form;
