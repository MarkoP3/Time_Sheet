import React, { useRef } from "react";

function Form({ changeDisplayModal, addClientHandler, countries }) {
  const name = useRef();
  const address = useRef();
  const city = useRef();
  const postal = useRef();
  const country = useRef();
  const form = useRef();
  function saveHandler(e) {
    addClientHandler({
      name: name.current.value,
      address: address.current.value,
      city: city.current.value,
      postal: postal.current.value,
      country: country.current[country.current.selectedIndex].text,
      countryID: country.current[country.current.selectedIndex].value,
    });
    form.current.reset();
    changeDisplayModal("none");
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
          overflowX: "visible",
          position: "relative",
        }}
      >
        <div
          id="new-member"
          class="new-member-inner"
          style={{ maxWidth: "100%" }}
        >
          <h2>Create new client</h2>
          <form action="javascript:void(0);" ref={form} onSubmit={saveHandler}>
            <ul class="form">
              <li>
                <label>Client name:</label>
                <input ref={name} type="text" class="in-text" required />
              </li>
              <li>
                <label>Address:</label>
                <input ref={address} type="text" class="in-text" required />
              </li>
              <li>
                <label>City:</label>
                <input ref={city} type="text" class="in-text" required />
              </li>
              <li>
                <label>Zip/Postal code:</label>
                <input ref={postal} type="text" class="in-text" required />
              </li>
              <li>
                <label>Country:</label>
                <select ref={country} required>
                  <option value="">Select country</option>
                  {countries.map((value) => {
                    return <option value={value.id}>{value.name}</option>;
                  })}
                </select>
              </li>
            </ul>

            <div class="buttons">
              <div class="inner">
                <input type="submit" class="btn green" value="Save" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
