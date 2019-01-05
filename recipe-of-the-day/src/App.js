import React, { Component } from 'react';
import './App.css';
import Recipes from './components/Recipes';
// import recipeOfTheDay from './data/recipeOfTheDay';
import RecipeOfTheDay from './components/RecipeOfTheDay';


class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="recipesContainer">
              <Recipes />
          </div>
          <div className="recipeOfTheDayContainer">
              <RecipeOfTheDay />
          </div>
      </div>
    );
  }
}

export default App;
