import React, { useState, useEffect, useRef } from "react";

function Form({ updateClientHandler, deleteClientHandler, countries, client }) {
  const [name, setname] = useState(client.name);
  const [address, setaddress] = useState(client.address);
  const [city, setcity] = useState(client.city);
  const [postal, setpostal] = useState(client.postal);
  const country = useRef();
  useEffect(() => {
    setname(client.name);
    setaddress(client.address);
    setcity(client.city);
    setpostal(client.postal);
  }, [client]);
  return (
    <form
      action="javascript:void(0);"
      onSubmit={(e) =>
        updateClientHandler({
          id: client.id,
          name: name,
          address: address,
          postal: postal,
          city: city,
          country: country.current[country.current.selectedIndex].text,
          countryID: country.current[country.current.selectedIndex].value,
        })
      }
    >
      <ul className="form">
        <li>
          <label>Client name:</label>
          <input
            required
            type="text"
            className="in-text"
            onChange={(e) => {
              setname(e.target.value);
            }}
            value={name}
          />
        </li>
        <li>
          <label>Zip/Postal code:</label>
          <input
            required
            type="text"
            className="in-text"
            onChange={(e) => {
              setpostal(e.target.value);
            }}
            value={postal}
          />
        </li>
      </ul>
      <ul className="form">
        <li>
          <label>Address:</label>
          <input
            required
            type="text"
            className="in-text"
            onChange={(e) => {
              setaddress(e.target.value);
            }}
            value={address}
          />
        </li>
        <li>
          <label>Country:</label>
          <select required ref={country}>
            <option value="">Select Country</option>
            {countries.map((value) => {
              if (value.name == client.country)
                return (
                  <option value={value.id} selected>
                    {value.name}
                  </option>
                );
              else return <option value={value.id}>{value.name}</option>;
            })}
          </select>
        </li>
      </ul>
      <ul className="form last">
        <li>
          <label>City:</label>
          <input
            type="text"
            className="in-text"
            onChange={(e) => {
              setcity(e.target.value);
            }}
            value={city}
            required
          />
        </li>
      </ul>
      <div className="buttons">
        <div className="inner">
          <input type="submit" value="Save" className="btn green" />
          <a
            href="javascript:;"
            className="btn red"
            onClick={(e) => deleteClientHandler(client.id)}
          >
            Delete
          </a>
        </div>
      </div>
    </form>
  );
}

export default Form;
