import React, { Children, useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return { itmes: [], totalAmount: 0 };
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
  });

  const addItemHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  const value = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: (id) => {},
  };

  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
};
