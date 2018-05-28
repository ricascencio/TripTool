import React from 'react';
import Radium from 'radium';

import './Countdown.css'

const countdown = (props) => {  
  return <div className="divCountDown">
    <div className="box_time"><p>{props.days + ''}</p> dias</div>
    <div className="box_time"><p>{props.hours + ''}</p> hrs</div>
    <div className="box_time"><p>{props.minutes + ''}</p> min</div>
    <div className="box_time"><p>{props.seconds + ''}</p> sec</div>
  </div>
};

export default Radium(countdown);
