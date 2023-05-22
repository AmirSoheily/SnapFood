import React, { Fragment } from "react";
import classes from "./Cart.module.css";
export default function Cart() {
  const CartITem = (
    <ul className={"cart-items"}>
      {[{ id: "c1", name: "sushi", amount: "2", price: "255" }].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <div>
      {CartITem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
}
