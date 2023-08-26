import React, { useContext } from "react";
import classes from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";
import CartContext from "../../../store/cart-context";

const HeaderCartButton = ({ onShowModal }) => {
  const cartCtx = useContext(CartContext);

  return (
    <button
      className={`${classes.button} ${classes.bump}`}
      onClick={onShowModal}
    >
      <div className={classes.icon}>
        <CartIcon />
      </div>
      Your Cart
      <div className={classes.badge}>{cartCtx.items.length}</div>
    </button>
  );
};

export default HeaderCartButton;
