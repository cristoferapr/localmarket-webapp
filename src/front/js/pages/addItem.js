import React, { useState, useEffect } from "react";
import "../../styles/itemCard.css";
import data from "../../../../public/data.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AddItem = () => {
  const [product, setProduct] = useState({
    name: '',
    price: 0,
    stock: 0,
    image: ''
  });

  const handleChange = event => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(product);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlForm="name">Nombre del producto:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlForm="price">Precio del producto:</label>
        <input
          type="number"
          id="price"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlForm="stock">Cantidad de stock:</label>
        <input
          type="number"
          id="stock"
          name="stock"
          value={product.stock}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlForm="image">Link de imagen:</label>
        <input
          type="text"
          id="image"
          name="image"
          value={product.image}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
}
export default AddItem;