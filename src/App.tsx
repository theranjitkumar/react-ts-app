import React, { Component } from 'react';
import Home from './components/home';
import Posts from './components/posts/posts';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h3> App  </h3>
        <Posts/>
      </div>
    );
  }
}

export default App;
