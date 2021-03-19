import React, { useRef, useEffect, useState } from "react";

function Form({
  project,
  leaders,
  customers,
  deleteProjectHandler,
  updateProjectHandler,
}) {
  const active = useRef();
  const inactive = useRef();
  const archive = useRef();
  const customer = useRef();
  const lead = useRef();
  let status = project.status;
  const [name, setName] = useState(project.name);
  const [description, setdescription] = useState(project.description);
  let radios = { Inactive: inactive, Active: active, Archive: archive };
  useEffect(() => {
    radios[project.status].current.checked = true;
    setName(project.name);
    setdescription(project.description);
  }, [project]);
  function saveHandler(e) {
    for (const [key, value] of Object.entries(radios)) {
      status = key;
      if (value.current.checked) break;
    }
    updateProjectHandler({
      id: project.id,
      name: name,
      description: description,
      customer: customer.current[customer.current.selectedIndex].text,
      customerID: customer.current[customer.current.selectedIndex].value,
      lead: lead.current[lead.current.selectedIndex].text,
      leadID: lead.current[lead.current.selectedIndex].value,
      status: status,
    });
  }
  return (
    <form action="javascript:void(0);" onSubmit={saveHandler}>
      <ul className="form">
        <li>
          <label>Project name:</label>
          <input
            required
            type="text"
            className="in-text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </li>
        <li>
          <label>Lead:</label>
          <select required ref={lead}>
            <option value="">Select Leader</option>
            {leaders.map((value) => {
              if (project.leadId == value.id)
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
      <ul className="form">
        <li>
          <label>Description:</label>
          <input
            required
            type="text"
            className="in-text"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          />
        </li>
      </ul>
      <ul className="form last">
        <li>
          <label>Customer:</label>
          <select required ref={customer}>
            <option value="">Select Customer</option>
            {customers.map((value) => {
              if (project.customerId == value.id)
                return (
                  <option value={value.id} selected>
                    {value.name}
                  </option>
                );
              else return <option value={value.id}>{value.name}</option>;
            })}
          </select>
        </li>
        <li className="inline">
          <label>Status:</label>
          <span className="radio">
            <label for="inactive">Active:</label>
            <input
              ref={active}
              type="radio"
              value="1"
              name={`status${project.id}`}
              id="inactive"
            />
          </span>
          <span className="radio">
            <label for="active">Inactive:</label>
            <input
              ref={inactive}
              type="radio"
              value="2"
              name={`status${project.id}`}
              id="active"
            />
          </span>
          <span className="radio">
            <label for="active">Archive:</label>
            <input
              ref={archive}
              type="radio"
              value="3"
              name={`status${project.id}`}
              id="active"
            />
          </span>
        </li>
      </ul>
      <div className="buttons">
        <div className="inner">
          <input type="submit" value="Save" className="btn green" />
          <a
            href="javascript:;"
            className="btn red"
            onClick={(e) => deleteProjectHandler(project.id)}
          >
            Delete
          </a>
        </div>
      </div>
    </form>
  );
}

export default Form;
