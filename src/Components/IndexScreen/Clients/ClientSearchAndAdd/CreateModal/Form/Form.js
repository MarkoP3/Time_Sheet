import React from 'react'

function Form({countries}) {
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
						<h2>Create new client</h2>
						<ul class="form">
							<li>
								<label>Client name:</label>
								<input type="text" class="in-text"/>
							</li>								
							<li>
								<label>Address:</label>
								<input type="text" class="in-text"/>
							</li>
							<li>
								<label>City:</label>
								<input type="text" class="in-text"/>
							</li>
							<li>
								<label>Zip/Postal code:</label>
								<input type="text" class="in-text"/>
							</li>
							<li>
								<label>Country:</label>
								<select>
									<option>Select country</option>
									{countries.map(value=>{
										return <option>{value.name}</option>
									})}
								</select>
							</li>
						</ul>
						<div class="buttons">
							<div class="inner">
								<a href="javascript:;" class="btn green">Save</a>
							</div>
						</div>
					</div>
      </div>
    </div>
    )
}

export default Form
