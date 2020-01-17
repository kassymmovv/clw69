import React from 'react';

const Card = (props) => {
    return (
        <div>
            <img src={props.img} alt=""/>
            <div>
                {props.name}
            </div>
            <button onClick={props.addToCard}>add to cart</button>
            <p>{props.price}</p>
        </div>
    );
};

export default Card;