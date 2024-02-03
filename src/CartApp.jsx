import React, { useEffect, useState, useReducer } from "react";
import { CartView } from "./components/cart/CartView";
import { CatalogView } from "./components/cart/CatalogView";
import { useItemsCart } from "./hooks/useItemsCart";
import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/cart/Navbar";

export const CartApp = () => {
  const { cartItems, handlerAddProductCart, handlerDeleteProduct } =
    useItemsCart();

  return (
    <>
    <Navbar/>
      <div className="container my-2">
        <h3>Card App</h3>
        <Routes>
          <Route
            path="catalog"
            element={<CatalogView handler={handlerAddProductCart} />}
          />

          <Route
            path="cart"
            element={
              cartItems?.length <= 0 ? (
                <div className="alert alert-warning">
                  No hay productos en el carrito de compras!!
                </div>
              ) : (
                <div className="my-4 w-50">
                  <CartView
                    items={cartItems}
                    handlerDelete={handlerDeleteProduct}
                  />
                </div>
              )
            }
          />

          <Route path="/" element={<Navigate to={"/catalog"} />} />
        </Routes>
      </div>
    </>
  );
};
