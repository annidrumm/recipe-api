import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import './App.css';

const App = () => {
  const APP_ID = "5356d460"
  const APP_KEY = "000e634ee221f3cc3fe235e57022402b"

  const [recipes, setRecipes] = useState([]) 

useEffect(() => {
  getRecipes()
}, [])

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json()
  setRecipes(data.hits)
  console.log(data.hits)
}

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">Search</button>
      </form>
      {recipes.map(recipe => ( 
         <Recipe key={recipe.recipe.label} title={recipe.recipe.label} ingredients={recipe.recipe.ingredients} calories={recipe.recipe.calories} image={recipe.recipe.image} />
      ))}
    </div>
  );
}

export default App;
