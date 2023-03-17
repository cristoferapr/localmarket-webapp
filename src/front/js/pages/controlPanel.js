import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/itemCard.css";
import "../../styles/controlPanel.css"
import { useNavigate } from "react-router-dom";
import data from "../../../../public/data.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const ControlPanel = () => {
    const { store, actions } = useContext(Context);
    let navigate = useNavigate(); 
    const routeChangeAdd = () =>{ 
        let path = '../addItem'; 
        navigate(path);
    }
    const routeChangeEdit = () =>{ 
        let path = '../editItem'; 
        navigate(path);
      }
      const routeChangeDelete = () =>{ 
        let path = '../deleteItem'; 
        navigate(path);
      }

      

    return (
        <div className="text-center mt-5">
        <button class="bnt" onClick={routeChangeAdd}>Agregar producto</button>
        <button class="bnt" onClick={routeChangeEdit}>Editar producto</button>
        </div>
      );
};