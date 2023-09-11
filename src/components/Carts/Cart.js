import React, { useCallback, useContext } from "react";
import classes from "../Carts/Cart.module.css";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import { createPortal } from "react-dom";
import cartContext from "../../store/cart-context";

const modalElement = document.getElementById("modal");

const Cart = ({ onHideModal }) => {
  const ctx = useContext(cartContext);
  const { items } = ctx;

  const totalAmount = ctx.totalAmount.toFixed(2);
  // 소숫점 둘째자리까지만 표출하는 걸로 고정.
  const addCountHandler = useCallback(
    (item) => {
      ctx.addItem({ ...item, count: 1 });
      // 1씩 더해지기 때문에 고정값 1을 준다. (counter에서는 inputRef.current.value로 입력값을 가지게 함)
    },
    [ctx.count]
  );

  const removeCountHandler = useCallback(
    (id) => {
      ctx.removeItem(id);
    },
    [ctx.count]
  );

  return createPortal(
    <div className={classes.cart_modal}>
      <div className={classes.cart}>
        <ul>
          {items.map((item, id) => (
            <li className={classes.cart_list} key={id}>
              <div className={classes.list_count}>
                <p>{item.name}</p>
                <div className={classes.list_number}>
                  <Input
                    id="count"
                    label={`$${item.price}`}
                    type="text"
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
                />
              </div>
            </li>
          ))}
        </ul>
        <p className={classes.total_amount}>
          <strong>Total Amount</strong>
          <span>{`$ ${totalAmount}`}</span>
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
