import React, { useState, useEffect } from "react";
import "../../styles/itemCard.css";
import data from "../../../../public/drinks.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DrinksStore = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="item-container">
      {data.map(product => (
        
            <div className="item-card">
                <img className="item-img" src={product.image} alt={product.name} />
                <div className="item-info">
                    <h2>{product.name}</h2>
                    <h2>{product.price}</h2>
                </div>
            </div>
          ))}
    </div>

  );
};

export default DrinksStore;