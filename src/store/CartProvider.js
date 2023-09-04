import React, { Children, useReducer } from "react";
import CartContext from "./cart-context";

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    // 조건 1. 배열 안에 같은 id의 Item이 있는 경우
    // 조건 1.에 부합하는 아이템찾기
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    ); // 해당 item의 indexNumber
    const existingItem = state.items[existingItemIndex];

    // 조건 1.에서 찾은 item을 담을 복제 배열
    let updatedItems = [...state.items];

    if (existingItemIndex) {
      // 조건 1.에 부합하는 경우, item에 count만 더 해서 업데이트
      const updatedItem = {
        ...existingItem,
        count: existingItem.count + action.item.count,
      };
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      // 조건 2. 배열 안에 같은 조건의 Item이 없는 경우
      updatedItems = state.items.concat(action.item);
    }
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.count;
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.tyep === "REMOVE") {
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
