import React, { useEffect, useContext } from "react";
import ItemCard from "./itemCard";
import "../../styles/home.css";
import { Context } from "../store/appContext";

const Shop = ({ handleClick }) => {
    const { store, actions } = useContext( Context )
    useEffect(() => {
      actions.setProducts()
    }, []);
  
      
        return (
          <section>
            {store.products.map(product => (
          <ItemCard key={product.id} item={product} handleClick={handleClick} />
                ))}
          </section>
      
        );
};

export default Shop;