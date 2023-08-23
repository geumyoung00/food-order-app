import React from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";

const HeaderCartButton = ({ onShowModal }) => {
  return (
    <button
      className={`${classes.button} ${classes.bump}`}
      onClick={onShowModal}
    >
      <div className={classes.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={classes.badge}>0</div>
    </button>
  );
};

export default HeaderCartButton;
