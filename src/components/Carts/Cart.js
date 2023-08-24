import React, { useContext } from "react";
import classes from "../Carts/Cart.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { createPortal } from "react-dom";
import CartContext from "../../store/cart-context";

const modalElement = document.getElementById("modal");

const Cart = ({ meals, onHideModal, item }) => {
  const cartCtx = useContext(CartContext);

  return createPortal(
    <div className={classes.cart_modal}>
      <div className={classes.cart}>
        <ul>
          {meals.map((el, id) => (
            <li className={classes.cart_list} key={id}>
              <div className={classes.list_count}>
                <p>{el.name}</p>
                <div className={classes.list_number}>
                  <Input
                    id="count"
                    label={`$${el.price}`}
                    type="text"
                    defaultValue={`x 0`}
                    readonly="readonly"
                  />
                </div>
              </div>
              <div className={classes.list_counter}>
                <Button id="button" name="-" />
                <Button id="button" name="+" />
              </div>
            </li>
          ))}
        </ul>
        <p className={classes.total_amount}>
          <strong>Total Amount</strong>
          <span>$55.99</span>
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
