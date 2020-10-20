import React from 'react';

const Recipe = ({ title, ingredients, calories, image}) => {

    return(
        <div>
            <h1>{title}</h1>
            <ol>
                <li>Ingredients</li>
            </ol>
            <p>{calories}</p>
            <img src={image} alt="" />
        </div>
    )
}

export default Recipe