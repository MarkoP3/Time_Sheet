import React from 'react'
import { NavLink } from 'react-router-dom'

function Number({url,pageNumber}) {
    return (
        <li>
        <NavLink to={url}>{pageNumber}</NavLink>
      </li>
    )
}

export default Number
