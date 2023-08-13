import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";

const HeaderCartButton = () => {
  return (
    <button className={`${classes.button} ${classes.bump}`}>
      <div className={classes.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={classes.badge}>0</div>
    </button>
  );
};

export default HeaderCartButton;
