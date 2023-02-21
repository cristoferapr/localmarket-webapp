import React from 'react';
import "../../styles/itemCard.css";

const ItemCard = ({ item, handleClick }) => {
    const { name , price, image } = item;
    return (
        <div className="cards">
          <div className="image_box">
            <img src={image} alt={name} />
          </div>
          <div className="details">
            <p>{name}</p>
            <p>Price - {price} CLP</p>
            <button onClick={() => handleClick(item)}>Add to Cart</button>
          </div>
        </div>
      );
    };

export default ItemCard