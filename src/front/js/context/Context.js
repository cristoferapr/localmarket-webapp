import React from "react";
import { createContext, useContext, useReducer, useEffect, useState } from "react";
import { cartReducer, productReducer } from "./Reducers";

const Cart = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("../../../../public/all.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data);
      });
  }, []);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  const [productState, productDispatch] = useReducer(productReducer, {
    byStock: false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
  });

  console.log(productState);

  return (
    <Cart.Provider value={{ state, dispatch, productState, productDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;