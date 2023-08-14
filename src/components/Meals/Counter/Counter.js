import React from "react";
import classes from "./Counter.module.css";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const Counter = () => {
  return (
    <div className={classes.meals_counter}>
      <Input id="count" type="number" label="Amount" className="counter" />
      <Button type="button" className="counter" name="+ Add" />
    </div>
  );
};

export default Counter;
