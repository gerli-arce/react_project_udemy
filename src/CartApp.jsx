import React, { useEffect, useState, useReducer } from "react";
import { CartView } from "./components/cart/CartView";
import { CatalogView } from "./components/cart/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/cart/Navbar";
import { CartRoutes } from "./routes/CartRpoutes";

export const CartApp = () => {
  const { cartItems, handlerAddProductCart, handlerDeleteProduct } =
    useItemsCart();

  return (
    <>
      <Navbar />
      <div className="container my-2">
        <h3>Card App</h3>
        <CartRoutes
          handlerAddProductCart={handlerAddProductCart}
          handlerDeleteProduct={handlerDeleteProduct}
          cartItems={cartItems}
        />
      </div>
    </>
  );
};
