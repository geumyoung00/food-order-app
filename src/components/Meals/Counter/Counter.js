import React, { useContext, useRef } from "react";
import classes from "./Counter.module.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import CartContext from "../../../store/cart-context";

const Counter = ({ item }) => {
  const inputRef = useRef();
  const ctx = useContext(CartContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const count = +inputRef.current.value;

    ctx.addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      count: count,
    });
  };

  return (
    <form className={classes.meals_counter} onSubmit={submitHandler}>
      <Input
        id="count"
        type="number"
        label="Amount"
        className="counter"
        defaultValue="0"
        min="0"
        max="5"
        ref={inputRef}
      />
      <Button type="submit" className="counter" name="+ Add" />
    </form>
  );
};

export default Counter;
