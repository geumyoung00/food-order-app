import React, { useContext } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import cartContext from '../../../store/cart-context';

const HeaderCartButton = ({ onShowModal }) => {
	const ctx = useContext(cartContext);
	const { items } = ctx; // const items = ctx.items;

	// items=[{ id, name, price, count }, { id, name, price, count }]
	const cartItemNumber = items.reduce((acc, currentItem) => {
		return acc + currentItem.count;
	}, 0);

	return (
		<button
			className={`${classes.button} ${classes.bump}`}
			onClick={onShowModal}
		>
			<div className={classes.icon}>
				<CartIcon />
			</div>
			Your Cart
			<div className={classes.badge}>{cartItemNumber}</div>
		</button>
	);
};

export default HeaderCartButton;
