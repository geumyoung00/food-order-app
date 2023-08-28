import React, { Children, useReducer, useRef } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // const updatedItems = state.items.concat(action.item);
    // const updatedTotalAmount = state.totalAmount + action.price;

    console.log(action.item.count);
    return { items: action.item, totalAmount: action.price };
  }
  if (action.type === "REMOVE") {
    const updatedItems = state.items.filter();
    const updatedTotalAmount = state.totalAmount - action.item.price;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  // if (action.type === "INPUT_CHANGE") {
  //   return { value: action.value };
  // }
  return { itmes: [], totalAmount: 0, val: 0 };
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, {
    items: [],
    totalAmount: 0,
    value: null,
  });

  const inputRef = useRef();

  const addItemHandler = (item) => {
    dispatchCart({
      type: "ADD",
      item: { name: item.name, id: item.id, count: inputRef.current },
      price: item.price,
    });
  };

  const removeItemHandler = (item) => {
    dispatchCart({ type: "REMOVE", item: item });
  };

  const inputChangeHandler = (event) => {
    // return dispatchCart({ value: inputRef.current.value });
  };

  const value = {
    items: cartState.items,
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    onChange: inputChangeHandler,
    ref: inputRef,
  };

  return (
    <>
      <CartContext.Provider value={value}>{children}</CartContext.Provider>
    </>
  );
};
