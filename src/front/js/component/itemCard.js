import React from 'react';
import "../../styles/itemCard.css";

const ItemCard = ({ item, handleClick }) => {
    const { name , price, image, qty } = item;
    function numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
      return parts.join(",");
      }
    return (
        <div className="cards">
          <div className="image_box">
            <img src={image} alt={name} />
          </div>
          <div className="details">
            <p>{name}</p>
            <p>Price - {numberWithCommas(price)} CLP x {qty} </p>
            <button onClick={() => handleClick(item)}>Add to Cart</button>
          </div>
        </div>
      );
    };

export default ItemCard