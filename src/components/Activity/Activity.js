import React from 'react';
import Radium from 'radium';

import './Activity.css'

const activity = (props) => {
  return <div className="Activity"><div className="Column Time">{props.time} </div><div className="Column ActivityText">&nbsp;- {props.name}</div></div>
};

export default Radium(activity);
