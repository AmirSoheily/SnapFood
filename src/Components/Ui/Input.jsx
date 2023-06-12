import React from "react";
import classes from "./Card.module.css";
const Input = React.forwardRef((props, ref) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input}>{props.label}</label>
      <input ref={ref} {...props.input}>
        {props.childerns}
      </input>
    </div>
  );
});
export default Input;
