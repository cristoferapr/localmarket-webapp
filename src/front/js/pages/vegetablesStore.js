import React, { useEffect, useContext, useState } from "react";
import ItemCard from "../component/itemCard";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Shopbar from "../component/shopbar";
import Cart from "../component/cart";

const VegetablesStore = () => {
    const { store, actions } = useContext( Context )
    const [show, setShow] = useState(true);

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
    }
    const filteredProducts = store.products.filter(product => product.category === 1);
  
    return (
      <React.Fragment>
      <Shopbar setShow={setShow} size={store.cart.length} />
      {show ? (
        <section>
        {filteredProducts.map(product => (
          <ItemCard key={product.id} item={product} handleClick={handleClick} />
        ))}
      </section>
      ) : (
        <Cart />
      )}
      </React.Fragment>
    );
 };

export default VegetablesStore;