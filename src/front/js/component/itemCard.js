import React from 'react';
import "../../styles/itemCard.css";

function ItemCard (props){
    return (
        <div className="item-card">
            <img className="item-img" src={props.image} alt={props.name} />
            <div className="item-info">
                <h2>{props.name}</h2>
                <h2>{props.price}</h2>
            </div>
        </div>
    );
}

export default ItemCard