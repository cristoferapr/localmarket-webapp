import React, { useState,useEffect } from "react";
import ItemCard from "./itemCard";
import data from "../../../../public/all.json";
import "../../styles/home.css";

const Shop = ({ handleClick }) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
      fetch("data.json")
        .then(res => res.json())
        .then(data => {
          setProducts(data);
        });
    }, []);
  
      
        return (
          <section>
            {data.map(product => (
          <ItemCard key={product.id} item={product} handleClick={handleClick} />
                ))}
          </section>
      
        );
};

export default Shop;