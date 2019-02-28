import React from 'react'
import Day from './Day';

let date = new Date();
let style = ''
const days = (props) => props.days.map((day, index) => {
    style = [];
    if(date.getMonth() == 3 && date.getDate() == day.date) 
      style = 'Today';
    else style = 'Day';
    return <Day
      style={style}
      date={day.date}
      main={day.main}
      key={day.id}
      activities={day.activities}/>
  });

export default days;
