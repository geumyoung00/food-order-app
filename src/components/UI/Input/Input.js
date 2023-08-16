import React from "react";
import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.input_box}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        className={`${classes.input} ${props.className}`}
        type={props.type}
        id={props.id}
        onChange={props.onChange}
        min={props.min}
        max={props.max}
        defaultValue={props.defaultValue}
      />
    </div>
  );
};

export default Input;
