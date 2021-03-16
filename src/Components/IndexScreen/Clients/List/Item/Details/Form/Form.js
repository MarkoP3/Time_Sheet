import React,{useState} from "react";

function Form({ countries,client }) {
   const [name, setname] = useState(client.name)
   const [address, setaddress] = useState(client.address)
   const [city, setcity] = useState(client.city)
   const [postal, setpostal] = useState(client.postal)
  return (
    <React.Fragment>
      <ul className="form">
        <li>
          <label>Client name:</label>
          <input type="text" className="in-text" onChange={(e)=>{setname(e.target.value)}} value={name} />
        </li>
        <li>
          <label>Zip/Postal code:</label>
          <input type="text" className="in-text" onChange={(e)=>{setpostal(e.target.value)}} value={postal} />
        </li>
      </ul>
      <ul className="form">
        <li>
          <label>Address:</label>
          <input type="text" className="in-text" onChange={(e)=>{setaddress(e.target.value)}} value={address} />
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
          <input type="text" className="in-text" onChange={(e)=>{setcity(e.target.value)}} value={city} />
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Form;
