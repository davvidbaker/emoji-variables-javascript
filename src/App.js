import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

const 🐯 = () => "horse"
const 🏆 = () => "horse"
const 🎺 = () => "trumpet"
const 👩‍🎤 = ({children}) => children

const 👨‍👩‍👧 = () => [
  <🐯/>,
  <👩‍🎤>cool</👩‍🎤>,
  <🎺 />,
]
class 🍏 extends Component {
  render() {
    return (
      <div className="App">
      <👨‍👩‍👧 />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default 🍏;
