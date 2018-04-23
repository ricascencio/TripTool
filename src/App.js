import React, { Component } from 'react';
import Radium from 'radium';
import './App.css';
import Day from './Day/Day';
import Countdown from './Countdown/Countdown';

class App extends Component {
  state = {
    days: [
       { id: '1', date: 'April 13', main: 'Llegada', activities: [ {id: '1', time: '10:00 - 10:30', name: 'Desayuno'}, {id: '2', time: '11:30 - 13:30', name: 'Ross'}, {id: '3', time: '14:00 - 15:00', name: 'Check in'}]},
       { id: '2', date: 'April 14', main: 'Disneyland - dia 1', activities: [ {id: '1', time: '08:00 - 24:00', name: 'Disneyland'}]},
       { id: '3', date: 'April 15', main: 'Disneyland - dia 2', activities: [ {id: '1', time: '08:00 - 22:00', name: 'Disneyland'}]},
       { id: '4', date: 'April 16', main: 'Shopping', activities: [ {id: '1', time: '08:00 - 09:00', name: 'Desayuno'}, {id: '2', time: '10:00 - 18:00', name: 'Shopping'}, {id: '3', time: '19:00 - 20:00', name: 'Cena'}]},
       { id: '5', date: 'April 17', main: 'California Adventure', activities: [ {id: '1', time: '08:00 - 22:00', name: 'California Adventure'}]},
       { id: '6', date: 'April 18', main: 'Hollywood', activities: [ {id: '1', time: '08:00 - 09:00', name: 'Desayuno'}, {id: '2', time: '10:00 - 13:00', name: 'Hollywood area'}, {id: '3', time: '14:00 - 15:00', name: 'Comida'}, {id: '4', time: '16:00 - 17:00', name: 'Santa Monica'}]},
       { id: '7', date: 'April 19', main: 'Universal Studios', activities: [ {id: '1', time: '08:00 - 09:00', name: 'Desayuno'}, {id: '2', time: '10:00 - 19:00', name: 'Universal Studios'}, {id: '3', time: '19:00 - 20:00', name: 'Cenar'}]}
    ],
    countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
        targetDate: '4-13-2019',
        targetHours: '06',
        targetMinutes: '37'
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
    var now = new Date().getTime();
    var dist = time - now;
    if(dist < 1 ){
      clearInterval(this.state.intervalId)
    }
    var days = Math.floor(dist / (1000 * 60 * 60 * 24));
    var hours = Math.floor((dist % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((dist %  (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((dist % (1000 * 60)) / 1000);
    this.setState(
      {
        countdown:
          {
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

  switchNameHandler = (newMain) => {
    this.setState(
      {
        days: [
          {date: 'April 13', main: 'Arriving'},
          {date: 'April 14', main: newMain},
          {date: 'April 15', main: 'Disney 2'},
          {date: 'April 16', main: 'California Adventure'}
        ]
      }
    )
  }

  mainChangeHandler = (event) => {
    this.setState(
      {
        days: [
          {date: 'April 13', main: 'Arriving'},
          {date: 'April 14', main: event.target.value},
          {date: 'April 15', main: 'Disney 2'},
          {date: 'April 16', main: 'California Adventure'}
        ]
      }
    )
  }

  render() {
    const detailsDayId = this.state.detailsDayId;
    return (
      <div className="App">
        <h1>Trip Tool</h1>
        <div>
          <h3>{this.state.countdown.targetDate}&nbsp;/&nbsp;{this.state.countdown.targetHours}:{this.state.countdown.targetMinutes}</h3>
          <Countdown
            days={this.state.countdown.days}
            hours={this.state.countdown.hours}
            minutes={this.state.countdown.minutes}
            seconds={this.state.countdown.seconds}/>
        </div>
        <div>

        </div>
        <div>
          {
            this.state.days.map((day, index) => {
              return <Day
                date={day.date}
                main={day.main}
                key={day.id}
                activities={day.activities}/>
            })
          }
        </div>


      </div>
    );
  }
}

export default Radium(App);
