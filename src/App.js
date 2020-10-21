import React, { useEffect, useState } from 'react';
import Recipe from './Recipe'
import './App.css';


const App = () => {
  const APP_ID = "5356d460"
  const APP_KEY = "000e634ee221f3cc3fe235e57022402b"

  const [recipes, setRecipes] = useState([]) 
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('vegetables')

useEffect(() => {
  getRecipes()
}, [query])

const getRecipes = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json()
  setRecipes(data.hits)
  console.log(data.hits)
}

const updateSearch = e => {
  setSearch(e.target.value) 
}  

const getSearch = e => {
   e.preventDefault()
  setQuery(search)
  setSearch('')
}

  return (
    <div className="App">
      <div className="subheadline" style={{margin:"15px"}}>
        <h1 style={{display:"inline"}}>Healthy and nutritious</h1>
        <h3 style={{fontSize:"2em", fontWeight:"bolder"}}>food recipes</h3>
        </div>
      <form onSubmit={getSearch} className="search-form">
        <input placeholder="smoothie, salad" className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipes">
      {recipes.map(recipe => ( 
         <Recipe key={recipe.recipe.label} title={recipe.recipe.label} ingredients={recipe.recipe.ingredients} calories={recipe.recipe.calories} image={recipe.recipe.image} healthLabels={recipe.recipe.healthLabels} />
      ))}
      </div> 
    </div>
  );
}

export default App;
