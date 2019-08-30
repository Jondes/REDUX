import React, { Component } from 'react';
import Ninjas from './Ninjas';


class App extends Component {
  state = {
    ninjas: [
      { name: 'John Terry', age: 33, country: 'England' },
      { name: 'John Terry', age: 33, country: 'England' },
      { name: 'John Terry', age: 33, country: 'England' },
    ]
  }




  render() {
    return (
      <div className="App">
        <h2>React ninja App</h2>
        <p>Welcome</p>
        <Ninjas ninjas={this.state.ninjas} />
        <AddNinjas addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
