import React, { useState, useEffect, useContext } from "react";
import "../../styles/cart.css"
import axios from "axios";
import OrderForm from "../component/order"
import { Context } from "../store/appContext";

const Cart = () => {
  const [show, setShow] = useState(true);
  const [price, setPrice] = useState(0);
  const { store, actions } = useContext(Context)

  const handleRemove = (item) => {
    {/*const arr = cart.filter((item) => item.id !== id);
  setCart(arr);*/}
    actions.deleteFromCart(item)
    handlePrice();
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

  const handlePrice = () => {
    let ans = 0;
    store.cart.map((item) => 
    (ans += item.price * item.stock));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
    return parts.join(",");
    }

  return (
    <>{show ? ( <><article>
      {store.cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.name} ({item.qty})</p>
          </div>
          <div>
            <button class="stilo" onClick={() => handleChange(item, 1)}>+</button>
            <button class="stilo">{item.stock}</button>
            <button class="stilo" onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{numberWithCommas(item.price) + " CLP"}</span>
            <button onClick={() => handleRemove(item)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>{numberWithCommas(price) + " CLP"}</span>
      </div>
    </article><div class="col-md-12 text-center mt-4">
        {/*<Link to="/order">*/}
        <button class="order" onClick={() => setShow(false)}>Order Now!</button>
        {/*</Link>*/}
      </div></> ): 
      <OrderForm cart={store.cart} price={price}/>} </>
  );
};

export default Cart;