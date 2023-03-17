import React, { useState, useEffect } from "react";
import "../../styles/editItem.css";
import data from "../../../../public/all.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const EditItem = () => {
    const [products, setProducts] = useState(data);
    const [id, setId] = useState('');
    const [product, setProduct] = useState({});
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newImage, setNewImage] = useState('');
  
    useEffect(() => {
      const foundProduct = products.find(p => p.name === id);
      setProduct(foundProduct || {});
    }, [id, products]);
  
    const handleEdit = () => {
      setEditing(true);
      setNewName(product.name);
      setNewPrice(product.price);
      setNewImage(product.image);
    };
  
    const handleSave = () => {
      const newProducts = products.map(p => {
        if (p.name === product.name) {
          return { name: newName, price: newPrice, image: newImage };
        }
        return p;
      });
      setProducts(newProducts);
      setEditing(false);
    };

    function numberWithCommas(x) {
      var parts = x.toString().split(".");
      parts[0]=parts[0].replace(/\B(?=(\d{3})+(?!\d))/g,".");
      return parts.join(",");
      }
  
    return (
      <div class="container">
        <div id="updiv">
          <label htmlFor="id">Ingresa el ID del producto:</label>
          <input
            type="text"
            id="id"
            value={id}
            onChange={e => setId(e.target.value)}
          />
        </div>
        {product.name ? (
          <div>
            <p>Nombre del producto:      {product.name}</p>
            <p>Precio del producto:      {numberWithCommas(product.price)}</p>
            <img src={product.image} alt={product.name} id="image"/>
            {!editing && (
              <button type="button" id="editbutton" onClick={handleEdit}>
                Editar
              </button>
            )}
            {editing && (
              <div>
                <div>
                  <label htmlFor="newName">Nombre:</label>
                  <input
                    type="text"
                    id="newName"
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="newPrice">Precio:</label>
                  <input
                    type="text"
                    id="newPrice"
                    value={newPrice}
                    onChange={e => setNewPrice(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="newImage">Imagen:</label>
                  <input
                    type="text"
                    id="newImage"
                    value={newImage}
                    onChange={e => setNewImage(e.target.value)}
                  />
                </div>
                <button type="button" id="savebutton" onClick={handleSave} >
                  Guardar cambios
                </button>
              </div>
            )}
          </div>
        ) : (
          <p>Producto no encontrado</p>
        )}
      </div>
    );
  }

export default EditItem;