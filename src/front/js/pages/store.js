import "../../styles/home.css";
import React, { useState, useEffect, useContext } from "react";
import "../../styles/itemCard.css";
import Shopbar from "../component/shopbar";
import Cart from "../component/cart";
import Shop from "../component/shop";
import { Context } from "../store/appContext";

export const Store = () => {
	const [show, setShow] = useState(true);
	const { store, actions } = useContext(Context)
	
	const handleClick = (item) => {
		if (store.cart.indexOf(item) !== -1) return;
		if (store.cart.some(p => p.name === item.name)){
			return
		}else{
		console.log(store.cart.indexOf(item))
		{/*setCart([...cart, item]);*/}
		actions.setCart(item)
		console.log(store.cart);
		}
	};
  
	const handleChange = (item, d) => {
		const ind = store.cart.indexOf(item);
		const arr = store.cart;
		arr[ind].stock += d;
		actions.setAllCart(arr)

	  
	  return
  	  {/*
	  if (arr[ind].stock === 0) arr[ind].stock = 1;
	actions.setCart([arr]); */}
	};
  
	// useEffect(() => {
	//   console.log("cart change");
	// }, [cart]);
  
	return (
	  <React.Fragment>
		<Shopbar setShow={setShow} size={store.cart.length} />
		{show ? (
		  <Shop handleClick={handleClick} />
		) : (
		  <Cart cart={store.cart} setCart={store.setCart} handleChange={handleChange} />
		)}
	  </React.Fragment>
	);
  };