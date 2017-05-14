import React, {Component} from 'react';
import Timer from './timer.jsx'
import Weather from './weather.jsx'

class App extends Component {
  constructor() {
    super()

  }

  render() {
    return(
      <div>
        <Timer/>
        <Weather/>
      </div>
    )
  }
}
export default App;
