import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Login } from "./pages/login";
import VegetablesStore from "./pages/vegetablesStore";
import PetStore from "./pages/petStore";
import DrinksStore from "./pages/drinkStore";
import GroceryStore from "./pages/groceryStore";
import CleaningStore from "./pages/cleaningStore";
import { Store } from "./pages/store";
import { ControlPanel } from "./pages/controlPanel";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";
import OrderForm from "./component/order";

import AddItem from "./pages/addItem";
import EditItem from "./pages/editItem";
import DeleteItem from "./pages/deleteItem";
import Signup from "./pages/signup";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Cart from "./component/cart";

 
//create your first component
const Layout = () => {
    //the basename is used when your project is published in a subdirectory and not in the root of the domain
    // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
    const basename = process.env.BASENAME || "";



    return (
        <div>
            <BrowserRouter basename={basename}>
                <ScrollToTop>
                    <Navbar />
                    <Routes>
                        <Route element={<Home />} path="/" />
                        <Route element={<Demo />} path="/demo" />
                        <Route element={<Login />} path="/login" />
                        <Route element={<Store />} path="/store" />
                        <Route element={<VegetablesStore />} path="/vegetablesStore" />
                        <Route element={<GroceryStore />} path="/groceryStore" />
                        <Route element={<DrinksStore />} path="/drinkStore" />
                        <Route element={<CleaningStore />} path="/cleaningStore" />
                        <Route element={<PetStore />} path="/petStore" />
                        <Route element={<ControlPanel />} path="/controlPanel" />
                        <Route exact path="/addItem" element={<AddItem />} />
                        <Route exact path="/editItem" element={<EditItem />} />
                        <Route exact path="/DeleteItem" element={<DeleteItem />} />
                        <Route exact path="/order" element={<OrderForm />} />
                        <Route element={<Signup />} path="/signup" />
                        <Route element={<Cart />} path="/cart" />
                        <Route element={<Single />} path="/single/:theid" />
                        <Route element={<h1>Not found!</h1>} />
                    </Routes>
                    <Footer />
                </ScrollToTop>
            </BrowserRouter>
        </div>
    );
};

export default injectContext(Layout);
