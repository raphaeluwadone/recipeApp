import React from "react";

function Recipe({ title, calories, image, ingredients, unique }) {
  return (
    <div className='container'>
      <div>
        <img src={image} />
      </div>
      <div className='content'>
        <h1>{title}</h1>
        <p>
          <b>Calories:</b> {Math.round(calories) } kcal
        </p>
        <div>
          <ul>
            {ingredients.map((ingredient) => (
              <li key={unique}>{ingredient.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Recipe;
