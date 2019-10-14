import React, { Component } from 'react';

const Recipes = (props) => (
  <div className="container">
    <div className="row">
      {props.recipes.map((recipe) => {
        return (
          <div key={recipe.recipe_id} className="col-md-4" style={{ marginTop: "2rem" }}>
            <div className="recipe__box">
              <img className="recipe__box-img" src={recipe.image_url} alt={recipe.title} />
              <div className="recipe__text">
                <h5 className="recipes__title">{recipe.title}</h5>
                <p className="recipes__subtitle">Publisher: <span>{recipe.publisher}</span></p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Recipes;