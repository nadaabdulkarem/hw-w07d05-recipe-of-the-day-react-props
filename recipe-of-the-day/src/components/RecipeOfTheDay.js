import React, {Component} from 'react';
import '../App.css';
import recipeOfTheDay from '../data/recipeOfTheDay';

class RecipeOfTheDay extends Component {
    renderIngredients(ingredients) {
        const recipeIngredients = ingredients.map((recipeIngredient, index) => {
            return(
                <div key={index}>
                    <p>{recipeIngredient.ingredient} - {recipeIngredient.amount} </p>
                </div>
            )
        })
        return recipeIngredients;
    }
    render(){
        return(
            <div>
                <h1>Recipe Of The Day</h1>
                <h5>{recipeOfTheDay.name}</h5>
                <h2>Description</h2>
                <p>{recipeOfTheDay.description}</p>
                <h2>Ingredients:</h2>
                {this.renderIngredients(recipeOfTheDay.ingredients)}                
            </div>
        )
    }
}

export default RecipeOfTheDay;