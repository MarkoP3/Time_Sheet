import React from 'react'
import Cell from './Cell/Cell';
import Header from './Header/Header';
import MobileHeader from './MobileHeader/MobileHeader';

function Calendar({date,changeDate}) {
    var rows=[1,2,3,4,5];
    var cols=[1,2,3,4,5,6,7]
    let firstDay=new Date(date.getFullYear(), date.getMonth(), 1);
    let startingDate=new Date(firstDay.setDate(firstDay.getDate()-((firstDay.getDay()==0?7:firstDay.getDay())-1)));
    return (
      <table className="month-table">
        <tbody>
          <Header></Header>
          <MobileHeader></MobileHeader>
          {rows.map((rowVal,index)=>{
 return (
   <tr>
     {cols.map((colVal, index) => {
        let cellDate=new Date(startingDate);
        startingDate=new Date(startingDate.setDate(startingDate.getDate()+1));
       return <Cell date={cellDate} changeDate={changeDate} hours="5"></Cell>;
     })}
   </tr>
 );
          })}
        </tbody>
      </table>
    );
}

export default Calendar
