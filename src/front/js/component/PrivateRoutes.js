import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
   return sessionStorage.getItem("token") ? <Outlet /> : <Navigate to="/login" />;   
};