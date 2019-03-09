import React, { Component } from 'react';
import Radium from 'radium';
import Activity from '../Activity/Activity';
import './Day.css'

const config = require('config');

class Day extends Component {

   //componentDidMount(){

     /* let cityID = 0;
     if(date.getDate() < 18){
       cityID = process.env.ID_LOS_ANGELES || config.get('ID_LOS_ANGELES');
     }else {
       cityID = process.env.ID_ANAHEIM || config.get('ID_ANAHEIM');
     } */
   //}
  
   /* getWeather = async () => {
     const invokeUrl = process.env.WEATHER_URL || config.get('WEATHER_URL'),
     const response = await fetch(invokeUrl+'?id=');
     const body = await response.json();
     if (response.status !== 200)
       throw Error(body.message);
       return body;
   }
  
   getForecast = async () => {
  
   } */



  render () {
    
    return (      
      <div className={this.props.style}>
              <div>
                <div>
                <h2>{this.props.date}&nbsp;-&nbsp;{this.props.main}</h2>                
                </div>
              </div>
              <details>
                <summary>Actividades</summary>
                <br/>
                {this.props.activities.map((activity, index) => {                  
                   return <Activity
                    time={activity.time}
                    name={activity.name}
                    key={activity.id}/>
                })}
              </details>
        </div>
    )
  }

}

export default Radium(Day);
