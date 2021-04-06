import React from "react";

export default function Recipe({ image, title, calories, ingredients }) {
  return (
    <div>
      <h1>{title}</h1>
      <p> Calories: {Math.round(calories)}</p>
      <img src={image} alt='' />
      <ul>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ul>
    </div>
  );
}
