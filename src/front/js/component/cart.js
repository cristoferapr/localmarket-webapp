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

  function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
    return parts.join(",");
    }

  return (
    <><article>
      {cart.map((item) => (
        <div className="cart_box" key={item.id}>
          <div className="cart_img">
            <img src={item.image} alt="" />
            <p>{item.name} ({item.qty})</p>
          </div>
          <div>
            <button class="stilo" onClick={() => handleChange(item, 1)}>+</button>
            <button class="stilo">{item.amount}</button>
            <button class="stilo" onClick={() => handleChange(item, -1)}>-</button>
          </div>
          <div>
            <span>{numberWithCommas(item.price) + " CLP"}</span>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        </div>
      ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <span>{numberWithCommas(price) + " CLP"}</span>
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