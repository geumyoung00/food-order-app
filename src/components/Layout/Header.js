import React from "react";
import classes from "./Header.module.css";
import imgHeader from "./meals.jpg";
import HeaderCartButton from "./HeaderCartButton/HeaderCartButton";

const Header = ({ onShowModal }) => {
  return (
    <>
      <div className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onShowModal={onShowModal} />
      </div>
      <div className={classes["main-image"]}>
        <img src={imgHeader} alt="Header background image" />
      </div>
    </>
  );
};

export default Header;
