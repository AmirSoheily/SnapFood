import React from "react";
import classes from "./Card.module.css";
export default function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input}>{props.label}</label>
      <input {...props.input}>{props.childerns}</input>
    </div>
  );
}
