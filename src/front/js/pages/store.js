import "../../styles/home.css";
import React, { useState, useEffect, useContext } from "react";
import "../../styles/itemCard.css";
import Shopbar from "../component/shopbar";
import Cart from "../component/cart";
import Shop from "../component/shop";

export const Store = () => {
	const [show, setShow] = useState(true);
	const [cart, setCart] = useState([]);
  
	const handleClick = (item) => {
	  if (cart.indexOf(item) !== -1) return;
	  setCart([...cart, item]);
	  console.log(cart);
	};
  
	const handleChange = (item, d) => {
	  const ind = cart.indexOf(item);
	  const arr = cart;
	  arr[ind].stock += d;
  
	  if (arr[ind].stock === 0) arr[ind].stock = 1;
	  setCart([...arr]);
	};
  
	// useEffect(() => {
	//   console.log("cart change");
	// }, [cart]);
  
	return (
	  <React.Fragment>
		<Shopbar setShow={setShow} size={cart.length} />
		{show ? (
		  <Shop handleClick={handleClick} />
		) : (
		  <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
		)}
	  </React.Fragment>
	);
  };