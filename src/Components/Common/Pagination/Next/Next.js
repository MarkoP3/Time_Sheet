import React from 'react'
import {  Link } from 'react-router-dom'

function Next({url}) {
    return (
        <li className="last">
          <Link to={url}>Next</Link>
        </li>
    )
}

export default Next
