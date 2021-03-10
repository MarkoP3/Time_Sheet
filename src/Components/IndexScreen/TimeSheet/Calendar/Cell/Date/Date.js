import React from 'react'

function Date({date}) {
    return (
        <div className="date">
          <span>{date.getDate()}.</span>
        </div>
    )
}

export default Date