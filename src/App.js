import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Recipe Search</h1>
        </header>
        <Form />
      </div>
    );
  }
}

export default App;