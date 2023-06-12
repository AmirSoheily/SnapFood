import { useReducer } from "react";
import CartContext from "./Cart-Context";
const defultcartreducer = {
  items: [],
  totalAmount: 0,
};
const cartreducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const UpdateAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return { items: updatedItems, totalAmount: UpdateAmount };
  }
  return defultcartreducer;
};
const CartProvider = (props) => {
  const [cartstate, dispatchCartAction] = useReducer(
    cartreducer,
    defultcartreducer
  );
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: "RemoveItem", id: id });
  };

  const cartContext = {
    items: cartstate.items,
    totalAmount: cartstate.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
