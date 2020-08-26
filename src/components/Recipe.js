import React from "react";

function Recipe({ title, calories, image, ingredients }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{calories}</p>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient.text}</li>
        ))}
      </ul>
      <img src={image} />
    </div>
  );
}

export default Recipe;
