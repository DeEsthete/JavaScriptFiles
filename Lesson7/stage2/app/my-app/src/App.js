import News from './components/news.js';
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <News name="JeLion"/>
      </div>
    );
  }
}

export default App;
