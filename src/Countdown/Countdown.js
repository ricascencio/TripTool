import React from 'react';
import Radium from 'radium';

import './Countdown.css'

const countdown = (props) => {
  // const style = {
  //   '@media (min-width: 500px)':{
  //       width: '450px'
  //   }
  // };
  return <div className="divCountDown">
    <div className="box_time"><p>{props.days + ''}</p> dias</div>
    <div className="box_time"><p>{props.hours + ''}</p> horas</div>
    <div className="box_time"><p>{props.minutes + ''}</p> minutos</div>
    <div className="box_time"><p>{props.seconds + ''}</p> </div>
  </div>
};

export default Radium(countdown);
