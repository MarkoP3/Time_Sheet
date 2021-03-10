import React from "react";

function Header() {
  return (
    <tr>
      <th>
        Client <em>*</em>
      </th>
      <th>
        Project <em>*</em>
      </th>
      <th>
        Category <em>*</em>
      </th>
      <th>Description</th>
      <th class="small">
        Time <em>*</em>
      </th>
      <th class="small">Overtime</th>
    </tr>
  );
}

export default Header;
