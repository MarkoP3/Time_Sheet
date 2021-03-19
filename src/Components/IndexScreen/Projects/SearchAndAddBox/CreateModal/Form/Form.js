import React, { useRef } from "react";

function Form({ changeDisplayModal, addProjectHandler, leaders, customers }) {
  const name = useRef();
  const description = useRef();
  const lead = useRef();
  const customer = useRef();
  const form = useRef();
  function saveHandler(e) {
    addProjectHandler({
      name: name.current.value,
      description: description.current.value,
      lead: lead.current[lead.current.selectedIndex].text,
      leadID: lead.current[lead.current.selectedIndex].value,
      customer: customer.current[customer.current.selectedIndex].text,
      customerID: customer.current[customer.current.selectedIndex].value,
      status: "Active",
    });
    changeDisplayModal("none");
    form.current.reset();
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
          className="new-member-inner"
          style={{ maxWidth: "100%" }}
        >
          <h2>Create new project</h2>
          <form ref={form} action="javascript:void(0);" onSubmit={saveHandler}>
            <ul className="form">
              <li>
                <label>Project name:</label>
                <input type="text" className="in-text" ref={name} required />
              </li>
              <li>
                <label>Description:</label>
                <input
                  type="text"
                  className="in-text"
                  ref={description}
                  required
                />
              </li>
              <li>
                <label>Customer:</label>
                <select ref={customer} required>
                  <option value="">Select customer</option>
                  {customers.map((customer) => {
                    return <option value={customer.id}>{customer.name}</option>;
                  })}
                </select>
              </li>
              <li>
                <label>Lead:</label>
                <select ref={lead} required>
                  <option value="">Select lead</option>
                  {leaders.map((lead) => {
                    return <option value={lead.id}>{lead.name}</option>;
                  })}
                </select>
              </li>
            </ul>
            <div className="buttons">
              <div className="inner">
                <input type="submit" className="btn green" value="Save" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
