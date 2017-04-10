import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import main from './assets/img/tester.jpg'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
	        <img src={main} className="Header-Image" alt="cityfigaro"/>
          <h2>Buy and Sell at SellerHolic</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
