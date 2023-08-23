import React, { useContext } from "react";
import classes from "./Counter.module.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import CartContext from "../../../store/cart-context";

const Counter = ({ item }) => {
  const cartCtx = useContext(CartContext);

  return (
    <div className={classes.meals_counter}>
      <Input
        id="count"
        type="number"
        label="Amount"
        className="counter"
        defaultValue="0"
        min="0"
        max="5"
      />
      <Button
        type="button"
        className="counter"
        name="+ Add"
        onClick={() => cartCtx.addItem(item)}
      />
    </div>
  );
};

export default Counter;
