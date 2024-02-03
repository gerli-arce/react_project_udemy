import React, { useEffect, useState } from "react";
import { CartView } from "./components/cart/CartView";
import { CatalogView } from "./components/cart/CatalogView";

const initialCartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

export const CartApp = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const handlerAddProductCart = (product) => {
    const hasItem = cartItems.find((i) => i.product.id === product.id);
    if (hasItem) {
      setCartItems(
        cartItems.map((i) => {
          if (i.product.id === product.id) {
            i.quantity = i.quantity + 1;
          }
          return i;
        })
      );
    } else {
      setCartItems([
        ...cartItems,
        {
          product: product,
          quantity: 1,
          total: product.price,
        },
      ]);
    }
  };

  const handlerDeleteProduct = (id) => {
    setCartItems([...cartItems.filter((i) => i.product.id !== id)]);
  };


  return (
    <>
      <div className="container my-2">
        <h3>Card App</h3>
        <CatalogView handler={handlerAddProductCart} />
        {cartItems?.length <= 0 || (
          <div className="my-4 w-50">
            <CartView items={cartItems} handlerDelete={handlerDeleteProduct} />
          </div>
        )}
      </div>
    </>
  );
};