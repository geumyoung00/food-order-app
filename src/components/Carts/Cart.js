import React, { useContext } from 'react';
import classes from '../Carts/Cart.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { createPortal } from 'react-dom';
import cartContext from '../../store/cart-context';

const modalElement = document.getElementById('modal');

const Cart = ({ onHideModal }) => {
	const ctx = useContext(cartContext);

	const totalAmount = ctx.totalAmount.toFixed(2);

	const addCountHandler = (item) => {
		ctx.addItem({ ...item, count: 1 });
	};

	const removeCountHandler = (id) => {
		ctx.removeItem(id);
	};

	return createPortal(
		<div className={classes.cart_modal}>
			<div className={classes.cart}>
				<ul>
					{ctx.items.map((item, id) => (
						<li className={classes.cart_list} key={id}>
							<div className={classes.list_count}>
								<p>{item.name}</p>
								<div className={classes.list_number}>
									<Input
										id="count"
										label={`$${item.price}`}
										type="text"
										defaultValue={`x 0`}
										value={`x ${item.count}`}
										readonly="readonly"
									/>
								</div>
							</div>
							<div className={classes.list_counter}>
								<Button
									id="button"
									name="-"
									onClick={() => removeCountHandler(item.id)}
								/>
								<Button
									id="button"
									name="+"
									onClick={() => addCountHandler(item)}
									// onClick={addCountHandler}
								/>
							</div>
						</li>
					))}
				</ul>
				<p className={classes.total_amount}>
					<strong>Total Amount</strong>
					<span>${totalAmount}</span>
				</p>
				<div className={classes.cart_btn}>
					<Button
						type="button"
						className="Cart"
						name="Close"
						onClick={onHideModal}
					/>
					<Button type="button" className="Cart" name="Order" />
				</div>
			</div>
		</div>,
		modalElement
	);
};

export default Cart;
