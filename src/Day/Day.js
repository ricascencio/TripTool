import React from 'react';
import Radium from 'radium';
import Activity from '../Activity/Activity';

import './Day.css'

const day = (props) => {
  return <div className="Day">
          <div>
            <h2>{props.date}&nbsp;-&nbsp;{props.main}</h2>
          </div>
          <details>
            <summary>Actividades</summary>
            <br/>
            {props.activities.map((activity, index) => {
               return <Activity
                time={activity.time}
                name={activity.name}
                key={activity.id}/>
            })}
          </details>
    </div>
};

export default Radium(day);
