import React from 'react'
import DayCell from './DayCell/DayCell';

function Days({startingDate,days}) {
    return (
        <div class="bottom">
        <ul class="days">
          {days.map((value, index) => {
            let cellDate = new Date(startingDate);
            startingDate = new Date(startingDate.setDate(startingDate.getDate() + 1));
            return <DayCell date={cellDate}></DayCell>
          })}
        </ul>
      </div>
    )
}

export default Days
