import React, {Component} from 'react';
import Clock from 'react-clock';

const moment = require('moment')
const dateStyle = {
  'fontSize': '3em'
}

const timeStyle = {
  'fontSize': '5em'
}

class Timer extends Component {
  constructor() {
    super()
    const timeFmt = 'LTS'
    const dateFmt = 'dddd Do of MMM'

    this.state = {
      time: (moment()).format(timeFmt),
      date: (moment()).format(dateFmt)
    }
    this.timer = setInterval(() => {
      this.setState({time: (moment()).format(timeFmt)})
      this.setState({date: (moment()).format(dateFmt)})
    }, 1000)
  }

  refreshStats() {
    clearInterval(this.timer);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return(
      <div style={{
        'fontFamily': '"Source Sans Pro","Helvetica Neue",Helvetica,Arial,sans-serif',
        color: 'white',
        'backgroundColor': '#19244c'
      }}>
        <div style={dateStyle}>{this.state.date}</div>
        <br/>
        <div style={timeStyle}>{this.state.time}</div>
      </div>
    )
  }
}
export default Timer;
