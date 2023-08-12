import React from "react";
import styles from "./HeaderCartButton.module.css";
import CartIcon from "./CartIcon";

const HeaderCartButton = () => {
  return (
    <button className={`${styles["button"]} ${styles["bump"]}`}>
      <div className={`${styles["icon"]}`}>
        <CartIcon></CartIcon>
      </div>
      Your Cart
      <div className={`${styles["badge"]}`}>0</div>
    </button>
  );
};

export default HeaderCartButton;
