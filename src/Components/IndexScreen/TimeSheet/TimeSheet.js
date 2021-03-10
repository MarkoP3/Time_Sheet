import React, { useState } from 'react'
import Title from '../Title/Title'
import Calendar from './Calendar/Calendar'
import DateNavigationBox from './DateNavigationBox/DateNavigationBox'
import TotalBar from '../TotalBar/TotalBar'

function TimeSheet({date,changeMonth,changeDate}) {
    return (
        <div className="wrapper">
        <section className="content">   
            <Title title="Time Sheet"></Title>
            <DateNavigationBox year={date.getFullYear()} month={date.toLocaleDateString("default",{month:"long"})} changeMonth={changeMonth}></DateNavigationBox>
            <Calendar date={date} changeDate={changeDate}></Calendar>
            <TotalBar total="90" text="Total hours"></TotalBar>
        </section>
        </div>
    )
}

export default TimeSheet
