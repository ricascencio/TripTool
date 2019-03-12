import React, { Component } from 'react';
import Radium from 'radium';
import logo from '../assets/plane.svg';
import './App.css';
import Days from '../components/Day/Days';
import Countdown from '../components/Countdown/Countdown';

class App extends Component {
  state = {
    days: [
       { id: '1', date: 'Saturday 13', main: 'Llegada', activities: [ {id: '1', time: '10:00 - 11:30', name: 'Desayuno'}, {id: '2', time: '11:30 - 13:30', name: 'Ross'}, {id: '3', time: '14:00 - 15:00', name: 'Check in'}]},
       { id: '2', date: 'Sunday 14', main: 'Disneyland - dia 1', activities: [ {id: '1', time: '08:00 - 24:00', name: 'Disneyland'}]},
       { id: '3', date: 'Monday 15', main: 'Shopping', activities: [ {id: '1', time: '08:00 - 09:00', name: 'Desayuno'}, {id: '2', time: '10:00 - 18:00', name: 'Shopping'}, {id: '3', time: '19:00 - 20:00', name: 'Cena'}]},
       { id: '4', date: 'Tuesday 16', main: 'Disneyland - dia 2', activities: [ {id: '1', time: '07:00 - 22:00', name: 'Disneyland'}]},       
       { id: '5', date: 'Wednesday 17', main: 'California Adventure', activities: [ {id: '1', time: '08:00 - 22:00', name: 'California Adventure'}]},
       { id: '6', date: 'Thursday 18', main: 'Hollywood', activities: [ {id: '1', time: '08:00 - 20:00', name: 'PENDIENTE',}]},
       { id: '7', date: 'Friday 19', main: 'Universal Studios', activities: [ {id: '1', time: '08:00 - 09:00', name: 'Desayuno'}, {id: '2', time: '10:00 - 19:00', name: 'Universal Studios'}, {id: '3', time: '19:00 - 20:00', name: 'Cenar'}]},
       { id: '8', date: 'Saturday 20', main: 'Regreso', activities: [ {id: '1', time: '16:04', name: 'Vuelo'}]}
    ],
    countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        targetDate: '04/13/2019',        
        targetHours: '06',
        targetMinutes: '12'
    },
    intervalId : 0
  }

  componentDidMount = () => {
    var intervalId = setInterval(this.timer, 1000);
    this.setState({intervalId: intervalId});
  }

  timer = () => {
    const time = new Date(this.state.countdown.targetDate);
    time.setHours(this.state.countdown.targetHours);
    time.setMinutes(this.state.countdown.targetMinutes);
    var now = new Date();
    var dist = time - now;
    let countStyle = ''
    let boxStyle = "box_time"
    if(dist < 1 ){
      clearInterval(this.state.intervalId)
      countStyle = "divCountDownFinish"
      days = "J"
      hours = "O"
      minutes = "Y"
      seconds = "!"
      boxStyle = "joy_text"
      this.setState(
        {
          countdown:
            {
              style: countStyle,
              boxStyle: boxStyle,
              days: days,
              hours: hours,
              minutes: minutes,
              seconds: seconds,
              targetDate: this.state.countdown.targetDate,
              targetHours: this.state.countdown.targetHours,
              targetMinutes: this.state.countdown.targetMinutes}
        }
      )
    }else{
      countStyle = "divCountDown"
      var days = Math.floor(dist / (1000 * 60 * 60 * 24));
      var hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((dist %  (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((dist % (1000 * 60)) / 1000);
      this.setState(
        {
          countdown:
            {
              style: countStyle,
              boxStyle: boxStyle,
              days: days,
              hours: hours,
              minutes: minutes,
              seconds: seconds,
              targetDate: this.state.countdown.targetDate,
              targetHours: this.state.countdown.targetHours,
              targetMinutes: this.state.countdown.targetMinutes}
        }
      )
    }
    
    
    
  }

  render() {
    const detailsDayId = this.state.detailsDayId;
    return (
      <div className="App">
        <h1 className="App-title"><img src={logo} className="App-logo" alt="logo" /> Trip Tool</h1>
        <div>
          <h3>{this.state.countdown.targetDate}&nbsp;-&nbsp;{this.state.countdown.targetHours}:{this.state.countdown.targetMinutes}</h3>
          <Countdown
            style={this.state.countdown.style}
            boxStyle={this.state.countdown.boxStyle}
            days={this.state.countdown.days}
            hours={this.state.countdown.hours}
            minutes={this.state.countdown.minutes}
            seconds={this.state.countdown.seconds}/>
        </div>
        <div>
          <Days
            days={this.state.days}/>
        </div>
      </div>
    );
  }
}

export default Radium(App);
