import React, { useState, useEffect } from "react";
import "../../styles/cart.css"
import { Link } from "react-router-dom";
import OrderForm from "./order";

const Cart = ({ cart, setCart, handleChange }) => {
  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => 
    (ans += item.price * item.amount));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <><article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.name}</p>
          </div>
          <div>
            <button onClick={() => handleChange(item, 1)}>+</button>
            <button>{item.amount}</button>
            <button onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{item.price}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span> CLP - {price}</span>
      </div>
    </article>
    <div class="col-md-12 text-center mt-4">
      <Link to="/order">
      <button class="order">Order Now!</button>
      </Link>
      </div></>
  );
};

export default Cart;