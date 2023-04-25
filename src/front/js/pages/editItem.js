import React, { useState, useEffect, useContext } from "react";
import "../../styles/editItem.css";
import { Context } from "../store/appContext";

const EditItem = () => {
    const { store, actions } = useContext(Context)
    
    const [id, setId] = useState('');
    const [product, setProduct] = useState({});
    const [editing, setEditing] = useState(false);
    const [newName, setNewName] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newImage, setNewImage] = useState('');
    const [reload, setReload] = useState(false)
    useEffect(() => {
      const foundProduct = store.products.find(p => p.name === id);
      setProduct(foundProduct || {});
    }, [id, store.products]);

    useEffect(() => {
      
    }, [reload]);
  
    const handleEdit = () => {
      setEditing(true);
      setNewName(product.name);
      setNewPrice(product.price);
      setNewImage(product.image);
    };
  
    const handleSave = event => {
      event.preventDefault();
      console.log()
      const formData = { newName, newPrice, newImage };
    fetch(`https://3001-cristoferap-localmarket-1d8i3g5peuz.ws-us95.gitpod.io/api/products/${product.name}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        actions.setProducts()
        setEditing(false);
      })
      .catch(err => {
        console.error(err);
      });
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
                    onChange={(e) => setNewName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="newPrice">Precio:</label>
                  <input
                    type="text"
                    id="newPrice"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="newImage">Imagen:</label>
                  <input
                    type="text"
                    id="newImage"
                    value={newImage}
                    onChange={(e) => setNewImage(e.target.value)}
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