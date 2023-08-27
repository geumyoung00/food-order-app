import React, { Children, useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = state.totalAmount + action.item.price;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE") {
    const updatedItems = state.items.filter((item) => {});
    const updatedTotalAmount = state.totalAmount - action.item.price;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "INPUT_CHANGE") {
    return { val: action.value };
  }
  return { itmes: [], totalAmount: 0, val: 0 };
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    items: [
      {
        name: "",
        id: "",
        count: null,
      },
    ],
    totalAmount: 0,
  });

  const addItemHandler = (item) => {
    dispatchCart({
      type: "ADD",
      item: { name: item.name, id: item.id, count: 99 },
    });
  };

  const removeItemHandler = (item) => {
    dispatchCart({ type: "REMOVE", item: item });
  };

  const inputChangeHandler = (event) => {
    dispatchCart({ type: "INPUT_CHANGE", value: event.target.value });
  };

  const value = {
    items: cartState.items,
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    onChange: inputChangeHandler,
  };

  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
};
