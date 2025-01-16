import React, {useState} from 'react';


const Products = (props) => {
    const [trigger, setTrigger] = useState(false);
    return (
        <div className="box" style={{ backgroundColor: trigger ? 'lightgreen' : 'white' }}>
            <div><img src={props.image}/></div>
            <div className='title mb-2' onClick={ () => setTrigger(!trigger)}>{props.name}</div>
            <div className='price'>{props.cookTimeMinutes}min</div>
            <div>{props.servings} servings</div>
            <div>Preptime: {props.prepTimeMinutes} min</div>
            <div>Difficulty: {props.difficulty}</div>
            <div>{props.cuisine} cuisine</div>
            <br/>
            <div>
                <b>Ingredients:</b>
                <ul>
                    {props.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </div>
            <br/>
            <div>
                <b>Instructions:</b>
                <ul>
                    {props.instructions.map((instruction, index) => (
                        <li key={index}>{instruction}</li>
                    ))}
                </ul>
            </div>
            <br/>
            <div>{props.rating}⭐️ from {props.reviewCount} reviews</div>
        </div>
    );
};

export default Products;