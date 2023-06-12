import React from "react";
import classes from "./Cart.module.css";
import Modal from "../Ui/Modal";
export default function Cart(props) {
  const CartITem = (
    <ul className={"cart-items"}>
      {[{ id: "c1", name: "sushi", amount: "2", price: "255" }].map((item) => {
        <li>{item.name}</li>;
      })}
    </ul>
  );
  return (
    <Modal onClick={props.OnClose}>
      {CartITem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.99</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.OnClose} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
}
