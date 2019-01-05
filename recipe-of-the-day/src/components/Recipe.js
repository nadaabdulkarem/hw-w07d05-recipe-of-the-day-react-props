import React, {Component} from 'react';

class Recipe extends Component {
    renderRecipes(recipes){
        const recipe = recipes.map((recipe, index) => {
            return(
                <div key={index} className="recipe">
                    <ul>
                        <li>Name: {recipe.name}</li>
                        <li>Servings: {recipe.servings}</li>
                        <li>Category: {recipe.category}</li>
                    </ul>
                </div>
            )
        })
        return recipe;
    }
    render(){
        return(
            <div>
                <h1>Recipes</h1>
                <div className="recipeContainer">
                    {this.renderRecipes(this.props.recipes)}
                </div>
            </div>
        );
    }
}

export default Recipe;