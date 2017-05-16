import React, {Component} from 'react';
import { Charts, LineChart, ChartContainer, ChartRow, YAxis} from 'react-timeseries-charts';
import { TimeEvent, TimeRange , Stream, Pipeline, EventOut, percentile, TimeSeries } from 'pondjs'

const moment = require('moment')

class Graph extends Component {
  constructor() {
    super()

    this.state = { 
      data: [], 
      beginTime: moment(new Date().getTime()).add(-10,'second'), 
      endTime: moment(new Date().getTime())
    }
  }

  componentDidMount() {
    // const stream = new Stream();
    // Pipeline()
    // .from(stream)
    // .windowBy('2s')
    // .emitOn('discard')
    // .aggregate({
    //     value: {value: percentile(90)}
    // })
    // .to(EventOut, event => {
    //     var data = this.state.data
    //     data.push(event)
    //     this.setState({ data: data })
    // });
    
    
    // fetch('', {
    //   headers: {
    //     Authorization: ''
    //   }
    // })
    // .then(a => {
    //   const reader = a.body.getReader()
    //   // let count = 0
    //   const pump = () => {
    //     return reader.read().then(({value, done}) => {
    //       if (done) return
    //       (new TextDecoder('utf-8').decode(value))
    //       .split('\n')
    //       .forEach(a => {
    //         if(typeof a === 'string' && a.trim() !== '')  {
    //           const o = JSON.parse(a)
    //           const event = new TimeEvent(new Date(o.received).getTime(), {value: o.value});
    //           this.setState({endTime: moment(new Date(o.received).getTime())})
    //           this.setState({beginTime: moment(new Date(o.received).getTime()).add(-1,'day')})
    //           stream.addEvent(event);
    //         }
    //       })
    //       return pump()
    //     });
    //   }
    //   pump()
    // })

    this.timer = setInterval(() => {
      this.setState({endTime: moment(new Date().getTime())})
      this.setState({beginTime: moment(new Date().getTime()).add(-10,'second')})
      const event = new TimeEvent(new Date().getTime(), {value: Math.random()*100});
      // stream.addEvent(event)
      var data = this.state.data
      data.push(event)
      this.setState({ data: data })
    }, 100)
  }

  refreshStats() {
    clearInterval(this.timer);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    const data = {
      name: 'traffic',
      events: this.state.data
    }
    const avgSeries = new TimeSeries(data);
    
    var range = new TimeRange(this.state.beginTime, this.state.endTime);
    return (  
      <div style={{'backgroundColor': 'white', 'marginTop': '20px'}}> 
        <ChartContainer 
          timeRange={range}>
          
          <ChartRow height="400">
            <YAxis
              id="y"
              label="Temperature (°F)"
              labelOffset={-5}
              format=",.1f"
              min={0} max={100}
              type="linear"/>
            <Charts>
              <LineChart
                axis="y"
                series={avgSeries}/>
            </Charts>
          </ChartRow>
        </ChartContainer>
      </div>
    )
  }
}
export default Graph;
