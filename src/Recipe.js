import React from 'react';
import style from './recipe.module.css'

const Recipe = ({ title, ingredients, calories, image, healthLabels}) => {

    return(
        <div className={style.recipe}>
            <img style={{margin:"20px"}} src={image} alt="" />
            <h1 style={{margin:"20px", textAlign:"center"}}>{title}</h1>
            <h3>{calories} Kcal</h3>
             <ul className="healthLabels">
                {healthLabels.map(healthLabel => (
                    <li className="healthItems">{healthLabel}</li>
                ))}
            {/* <h3>Ingredients</h3>
            <ul style={{margin:"15px"}}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul> */}
            </ul>
        </div>
    )
}

export default Recipe