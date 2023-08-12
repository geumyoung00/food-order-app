import React from "react";
import styles from "./Header.module.css";
import imgHeader from "./meals.jpg";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

const Header = () => {
  return (
    <>
      <div className={`${styles["header"]}`}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </div>
      <div className={`${styles["main-image"]}`}>
        <img src={imgHeader} alt="Header background image" />
      </div>
    </>
  );
};

export default Header;
