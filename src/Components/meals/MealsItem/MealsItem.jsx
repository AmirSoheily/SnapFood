import React from "react";
import classes from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";
export default function MealsItem(props) {
  const price = `${props.price}`;
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.discrption}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <MealsItemForm />
      </div>
    </li>
  );
}
