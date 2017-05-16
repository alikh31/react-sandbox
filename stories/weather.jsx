import React, {Component} from 'react';

const forecast = require('../test/assets/forecast.js')

// https://api.apixu.com/v1/forecast.json?key=5ddbd6e648624276ac7225803171305&q=Berlin
// https://api.apixu.com/v1/current.json?key=5ddbd6e648624276ac7225803171305&q=Berlin

class Weather extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div>
        {forecast.forecast.forecastday[0].hour.map(o => {
            if (o.condition)
            return (
              <div 
                key={o.time}
                className="card" 
                style={{
                  width: '10rem', 
                  height: '15rem', 
                  float: 'left', 
                  margin: '10px', 
                  backgroundColor: 'transparent', 
                  border: 'solid 1px', 
                  padding: '10px'}}>
                <img 
                  className="card-img-top" 
                  style={{height: '7rem'}} 
                  src={'https:' + o.condition.icon} 
                  alt="Card image cap" />
                <div className="card-block">
                  {o.time}
                </div>
              </div>
              )
        })}
      </div>
    )
  }
}
export default Weather;
