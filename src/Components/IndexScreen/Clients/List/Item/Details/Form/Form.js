import React from "react";

function Form({ countries,client }) {
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
            {countries.map(value=>{
              if(value.name==client.country)
              return <option selected>{value.name}</option>
              else
              return <option>{value.name}</option>
            })}
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
