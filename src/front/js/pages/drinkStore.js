import React, { useState, useEffect } from "react";
import "../../styles/itemCard.css";
import data from "../../../../public/drinks.json";
import Container from 'react-bootstrap/Container';
import ItemCard from "../component/itemCard";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const DrinksStore = () =>  {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const handleClick = (item) => {
	  if (cart.indexOf(item) !== -1) return;
	  setCart([...cart, item]);
	  console.log(cart);
	};

  useEffect(() => {
    fetch("data.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  return (
    <div className="item-container">
          <section>
            {data.map(product => (
          <ItemCard key={product.id} item={product} handleClick={handleClick} />
                ))}
          </section>
      
      
    </div>

  );
}

export default DrinksStore;