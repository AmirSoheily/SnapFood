import React, { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../Provider/Cart-Context";
export default function HeaderCartButton(props) {
  const Ctrx = useContext(CartContext);

  const Badge = Ctrx.items.reduce((curitem, item) => {
    return curitem + item.amount;
  }, 0);

  return (
    <button onClick={props.OnClick} className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{Badge}</span>
    </button>
  );
}
