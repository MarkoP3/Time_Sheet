import React from "react";

function Form({ client }) {
  return (
    <React.Fragment>
      <ul className="form">
        <li>
          <label>Client name:</label>
          <input type="text" className="in-text" value={client?.name} />
        </li>
        <li>
          <label>Zip/Postal code:</label>
          <input type="text" className="in-text" value={client?.postal} />
        </li>
      </ul>
      <ul className="form">
        <li>
          <label>Address:</label>
          <input type="text" className="in-text" value={client?.address} />
        </li>
        <li>
          <label>Country:</label>
          <select>
            <option>Select country</option>
          </select>
        </li>
      </ul>
      <ul className="form last">
        <li>
          <label>City:</label>
          <input type="text" className="in-text" value={client?.city} />
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Form;
