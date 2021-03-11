import React from "react";

function Row({ clients, projects, categories }) {
  return (
    <tr>
      <td>
        <select>
          <option>Choose client</option>
          {clients.map((v, i) => {
            return <option>{v}</option>;
          })}
        </select>
      </td>
      <td>
        <select>
          <option>Choose project</option>
          {projects.map((v, i) => {
            return <option>{v}</option>;
          })}
        </select>
      </td>
      <td>
        <select>
          <option>Choose category</option>
          {categories.map((v, i) => {
            return <option>{v}</option>;
          })}
        </select>
      </td>
      <td>
        <input type="text" class="in-text medium" />
      </td>
      <td class="small">
        <input type="text" class="in-text xsmall" />
      </td>
      <td class="small">
        <input type="text" class="in-text xsmall" />
      </td>
    </tr>
  );
}

export default Row;
