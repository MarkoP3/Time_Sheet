import React from 'react'

function DayCell({date}) {
    return (
      <li>
        <a href="javascript:;">
          <b>{date.toLocaleString('default', { month: 'short' })} {date.toLocaleString('default', { day: 'numeric' })} </b>

          <span>{date.toLocaleString('default', { weekday: 'long' })}</span>
        </a>
      </li>
    );
}

export default DayCell
