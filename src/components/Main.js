import React, { useState, useEffect } from "react";
import Recipe from "./Recipe";
import UUID from 'uuid/v4'


function Main() {
  const APP_ID = "0753b0e9";
  const APP_KEY = "91aab3bbd87c18c9dc546bf5b91b9197";
  const [query, setQuery] = useState("chicken");
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);




  useEffect(() => {
    getRecipe();
  }, [query]);

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);

    console.log(data);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };


  return (
    <div>
      <form onSubmit={getSearch}>
        <input
          className='search-bar'
          type='text'
          value={search}
          placeholder="Search for your meal..."
          onChange={updateSearch}
        />
        <input className='btn' type='Submit' />
      </form>
      <div className='recipe'>
        {recipes.map((recipe) => {
          return (
           
              <Recipe
                unique={UUID()}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />

          );
        })}
      </div>
    </div>
  );
}

export default Main;
