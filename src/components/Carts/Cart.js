import React from "react";
import classes from "../Carts/Cart.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { createPortal } from "react-dom";

const modalElement = document.getElementById("modal");

const cartItems = [
  {
    id: "m1",
    name: "Sushi",
    price: 22.99,
    count: 3,
  },
];

const Cart = ({ onHideModal }) => {
  return createPortal(
    <div className={classes.cart_modal}>
      <div className={classes.cart}>
        <ul>
          {cartItems.map((el, id) => (
            <li className={classes.cart_list} key={id}>
              <div className={classes.list_count}>
                <p>{el.name}</p>
                <div className={classes.list_number}>
                  <Input
                    id="count"
                    label={`$${el.price}`}
                    type="text"
                    value={`x ${el.count}`}
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
