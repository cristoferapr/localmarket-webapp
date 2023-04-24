import React, { useState, useEffect, useContext } from "react";
import "../../styles/itemCard.css";
import "../../styles/addItem.css";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const AddItem = () => {
  const { store } = useContext(Context)
  const id = store.products.length + 1
  console.log(id)
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    stock: 1,
    image: '',
    category: 1,
    qty: 'un',
    id: id
  });

  const navigate = useNavigate()

  const handleChange = event => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch('https://3001-cristoferap-localmarket-1d8i3g5peuz.ws-us95.gitpod.io/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => {
        console.error(err);
      });
      navigate('/')
  };

  return (
    <div class="container mt-5">
      <form onSubmit={handleSubmit} id="additem">
        <div className="d-flex justify-content-center mb-3"> 
          <label className="me-2" htmlFor="name" id="nn">Nombre del producto:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-center mb-3">
          <label className="me-3" htmlFor="price" id="pp">Precio del producto:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-center mb-3">
          <label className="me-4" htmlFor="image" id="im">Link de imagen:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={product.image}
            onChange={handleChange}
          />
        </div>
        <div className="d-flex justify-content-center">
          <label className="me-5" htmlFor="category" id="cat">Category:</label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
          >
          <option value="1">Fruits and Vegetables</option>
          <option value="2">Drinks</option>
          <option value="3">Cleaning stuff</option>
          <option value="4">Grocerys</option>
          <option value="5">Pets stuff</option>
          </select>
        </div>
        <div className="mt-3 d-flex justify-content-center">
          <label htmlFor="qty" id="un">Unidad de medida:</label>
          <select
            id="qty"
            name="qty"
            value={product.qty}
            onChange={handleChange}
          >
            <option value="un">Unidad (un)</option>
            <option value="kg">Kilogramo (kg)</option>
          </select>
        </div>
        <div className="mt-3 d-flex justify-content-center">
        <button className="d-flex justify-content-center" type="submit" id="sbb">Enviar</button>
        </div>
      </form>
    </div>
  );
}
export default AddItem;