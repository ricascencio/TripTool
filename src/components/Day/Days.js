import React from 'react'
import Day from './Day';

const days = (props) => props.days.map((day, index) => {
    return <Day
      date={day.date}
      main={day.main}
      key={day.id}
      activities={day.activities}/>
  });

export default days;
