import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';

const API_KEY = '3c2d838b88724ded2c6bf235e4eb0a56';

class App extends Component {
  state = {
    recipes: []
  }
  getRecipe = async (e) => {
    e.preventDefault();
    const recipeName = e.target.elements.recipeName.value;

    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=shredded%20chicken&count=10`);

    const data = await api_call.json();

    this.setState({
      recipes: data
    });
    console.log(this.state.recipes);
  }
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <h1 className="app-title">Recipe Search</h1>
        </header>
        <Form getRecipe={this.getRecipe} />
      </div>
    );
  }
}

export default App;