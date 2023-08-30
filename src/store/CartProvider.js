import React, { useReducer } from 'react';
import CartContext from './cart-context';

const cartReducer = (state, action) => {
	// state -> items, totalAmount
	if (action.type === 'ADD') {
		// action -> item={ id, name, price, count }
		// 1) 이미 이 아이템이 카트에 있는 경우
		// 2) 카트에 없는 경우
		const existingItemIndex = state.items.findIndex(
			(item) => item.id === action.item.id
		);
		const existingItem = state.items[existingItemIndex]; // { id, name, price, count } OR undefined
		let updatedItems = [...state.items];

		if (existingItem) {
			// 이미 카트에 item이 있는 경우
			// count만 더함
			const updatedItem = {
				...existingItem,
				count: action.item.count + existingItem.count,
			};
			updatedItems[existingItemIndex] = updatedItem;
		} else {
			// 카트에 없는 item 추가하는 경우:
			updatedItems = state.items.concat(action.item);
		}
		const updatedTotalAmount =
			state.totalAmount + action.item.price * action.item.count;
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
		dispatchCart({ type: 'ADD', item: item });
	};

	const value = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem: addItemHandler,
		removeItem: (id) => {},
	};

	return (
		<>
			<CartContext.Provider value={value}>{children}</CartContext.Provider>
		</>
	);
};
