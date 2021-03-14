import React,{useRef,useEffect} from "react";

function Form({project,leaders,customers}) {
  const active = useRef()
  const inactive = useRef()
  const archive = useRef()
  let radios={"Inactive":inactive,"Active":active,"Archive":archive};
  useEffect(() => {
    radios[project.status].current.checked=true;
  }, [project])
  return (
    <React.Fragment>
      <ul className="form">
        <li>
          <label>Project name:</label>
          <input type="text" className="in-text" value={project.name} />
        </li>
        <li>
          <label>Lead:</label>
          <select>
            {leaders.map(value=>{
              if(project.leadID==value.id)
              return <option selected>{value.name}</option>
              else
              return <option>{value.name}</option>
            })}
          </select>
        </li>
      </ul>
      <ul className="form">
        <li>
          <label>Description:</label>
          <input type="text" className="in-text" value={project.description}/>
        </li>
      </ul>
      <ul className="form last">
        <li>
          <label>Customer:</label>
          <select>
            {customers.map(value=>{
              if(project.customerID==value.id)
              return <option selected>{value.name}</option>
              else
              return <option>{value.name}</option>
            })}
          </select>
        </li>
        <li className="inline">
          <label>Status:</label>
          <span className="radio">
            <label for="inactive">Active:</label>
            <input ref={active} type="radio" value="1" name={`status${project.id}`} id="inactive" />
          </span>
          <span className="radio">
            <label for="active">Inactive:</label>
            <input ref={inactive} type="radio" value="2" name={`status${project.id}`} id="active"/>
          </span>
          <span className="radio">
            <label for="active">Archive:</label>
            <input ref={archive} type="radio" value="3" name={`status${project.id}`} id="active"/>
          </span>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default Form;
