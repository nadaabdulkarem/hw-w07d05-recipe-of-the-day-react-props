import React from 'react';
import '../App.css';
import Recipe from './Recipe';
import recipes from '../data/recipes';

const Recipes = (props) => {
    // const recipes = props.recipes;

    return(
        <div>
            <div className="recipesContainer">
                <Recipe recipes={recipes} />
            </div>
        </div>
    )
}

export default Recipes;