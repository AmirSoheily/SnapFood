import React, { useContext } from "react";
import classes from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";
import CartContext from "../../Provider/Cart-Context";
export default function MealsItem(props) {
  const ctrx = useContext(CartContext);

  const price = `${props.price}`;
  const AddCartHandler = (amount) => {
    ctrx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.discrption}</div>
        <div className={classes.price}>{price}</div>
      </div>

      <div>
        <MealsItemForm onAddToCart={AddCartHandler} />
      </div>
    </li>
  );
}
