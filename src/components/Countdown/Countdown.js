import React from 'react';
import Radium from 'radium';

import './Countdown.css'

const countdown = (props) => {
  if (props.boxStyle === 'joy_text'){
    return <div className={props.style}>
    <div className={props.boxStyle}><p>{props.days + ' '}</p></div>
    <div className={props.boxStyle}><p>{props.hours + ' '}</p></div>
    <div className={props.boxStyle}><p>{props.minutes + ' '}</p></div>
    <div className={props.boxStyle}><p>{props.seconds + ' '}</p></div>
  </div>
  }
  return <div className={props.style}>
    <div className={props.boxStyle}><p>{props.days + ' '}</p> dias</div>
    <div className={props.boxStyle}><p>{props.hours + ' '}</p> hrs</div>
    <div className={props.boxStyle}><p>{props.minutes + ' '}</p> min</div>
    <div className={props.boxStyle}><p>{props.seconds + ' '}</p> sec</div>
  </div>
};

export default Radium(countdown);
