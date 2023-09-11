import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  console.log("버튼 실행 중" + props.name);
  return (
    <button
      type={props.type || "button"}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default React.memo(Button);
