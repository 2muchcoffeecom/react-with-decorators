import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function classDecorator(constructor) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  }
}

@classDecorator
class App extends Component {
  property = "property";
  hello;

  render() {
    console.log(this.hello); // override

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
