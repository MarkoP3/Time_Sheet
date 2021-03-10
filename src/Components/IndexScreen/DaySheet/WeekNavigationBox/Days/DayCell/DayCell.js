import React from 'react'

function DayCell({date,active,changeDate}) {
    return (
      <li className={active}>
        <a href="javascript:;" onClick={e=>changeDate(date)}>
          <b>{date.toLocaleString('default', { month: 'short' })} {date.toLocaleString('default', { day: 'numeric' })} </b>

          <span>{date.toLocaleString('default', { weekday: 'long' })}</span>
        </a>
      </li>
    );
}

export default DayCell
