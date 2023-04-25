import React, { useState, useEffect, useContext } from "react";
import "../../styles/cart.css"
import axios from "axios";
import OrderForm from "../component/order"
import { Context } from "../store/appContext";

const Cart = ({ handleChange }) => {
  const [show, setShow] = useState(true);
  const [price, setPrice] = useState(0);
  const { store, actions } = useContext(Context)

  const handleRemove = (item) => {
    {/*const arr = cart.filter((item) => item.id !== id);
  setCart(arr);*/}
    actions.deleteFromCart(item)
    handlePrice();
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

    const enviarCorreo = async (event) => {
      event.preventDefault();

      try {
        // Envíe los detalles del carrito de compras a través de una solicitud POST a la ruta Flask
        await axios.post('https://3001-cristoferap-localmarket-1d8i3g5peuz.ws-us95.gitpod.io/api/sendmail', { cart, price });
    
        // Muestre un mensaje al usuario indicando que el correo electrónico se envió correctamente
        alert('El correo electrónico se envió correctamente');
      } catch (error) {
        // Muestre un mensaje al usuario indicando que se produjo un error al enviar el correo electrónico
        alert('Se produjo un error al enviar el correo electrónico');
        console.error(error);
      }

    };
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
      <OrderForm cart={cart} price={price}/>} </>
  );
};

export default Cart;