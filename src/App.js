import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { tsPropertySignature } from '@babel/types';

class App extends Component {

  render(){
    console.log("taco is", this.props.taco)

    const hello = "Hello " + this.props.taco.first + " " + this.props.taco.last + ". How are you today good sir?"

    const repo = "Go checkout your Github " + this.props.taco.first

    const fullName = this.props.taco.first + " " + this.props.taco.last
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{fullName}</h1>
          <p>
            {hello}
          </p>
          <a
            className="App-link"
            href="https://github.com/wesseln1"
            target="_blank"
            rel="noopener noreferrer"
          >
            {repo}
          </a>
        </header>
      </div>
    )
  }
}

export default App;
