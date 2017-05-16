import React, {Component} from 'react';
import '../styles/analogueClock.scss'

class ClockFace extends Component {
  render() {
    var d = this.props.date;
    var millis = d.getMilliseconds();
    var second = d.getSeconds() * 6 + millis * (6 / 1000);
    var minute = d.getMinutes() * 6 + second / 60;
    var hour = ((d.getHours() % 12) / 12) * 360 + 90 + minute / 12;

    return (
      <div className="circle">
        <div className="face">
          <div className="second" style={transform(rotate(second))} />
          <div className="hour" style={transform(rotate(hour))} />
          <div className="minute" style={transform(rotate(minute))} />
        </div>
      </div>
    );
  }
}

function transform(str) {
  return { transform: str };
}

function rotate(deg) {
  return 'rotate(' + deg + 'deg)';
}

class AnalogClock extends Component {
  constructor() {
    super()
    this.state = { date: new Date() };

    this.timer = setInterval(() => {
      this.setState({ date: new Date() })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return <ClockFace date={this.state.date} />;
  }
}
 
export default AnalogClock;
