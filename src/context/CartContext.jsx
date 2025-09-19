import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Add item to cart
  const addToCart = (item) => {
    setCart((prevCart) => {
      const existing = prevCart.find((p) => p.name === item.name);
      if (existing) {
        return prevCart.map((p) =>
          p.name === item.name
            ? { ...p, quantity: p.quantity + item.quantity }
            : p
        );
      }
      return [...prevCart, item];
    });
  };

  // Remove item from cart
  const removeFromCart = (name) => {
    setCart((prevCart) => prevCart.filter((p) => p.name !== name));
  };

  // ✅ Update item quantity (used for increment/decrement in AddCart)
  const updateQuantity = (name, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.name === name ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  // (Optional) Clear cart after checkout
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
