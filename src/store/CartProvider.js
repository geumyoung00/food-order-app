import React, { Children, useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price;
    console.log(action.type);
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  } else if (action.type === "REMOVE") {
    const updatedItems = state.items.filter(
      (state) => state.item !== action.item
    );
    const updatedTotalAmount = state.totalAmount - action.item.price;
    console.log(action.type);
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

  const removeItemHandler = (item) => {
    dispatchCart({ type: "REMOVE", item: item });
  };

  const value = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
};
