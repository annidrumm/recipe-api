import React, { useState } from 'react';
import style from './recipe.module.css'

const Recipe = ({ title, ingredients, calories, image, healthLabels}) => {
  const [isOpened, setIsOpened] = useState(false);
    return(
        <div className={style.recipe}>
            <img style={{margin:"20px"}} src={image} alt="" />
            <h1 style={{margin:"20px", textAlign:"center"}}>{title}</h1>
      <h3>{Math.round(calories)} Kcal</h3>
    <div className="box">
      <div className="boxTitle" onClick={toggle}>
       <h3>Show ingredients</h3> 
      </div>
      {isOpened && (
        <div className="boxContent">
          <ul style={{margin:"15px"}}>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul> 
        </div>
      )}
    </div>
             <ul className="healthLabels">
                {healthLabels.map(healthLabel => (
                    <li className="healthItems">{healthLabel}</li>
                ))}
            </ul>
        </div>
    )
      function toggle() {
    setIsOpened(wasOpened => !wasOpened);
  }
}

export default Recipe