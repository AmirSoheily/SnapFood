import { useState } from "react";
import Header from "./Components/Layout/Header";
import Meals from "./Components/meals/meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/Provider/Cart-Provider";
function App() {
  const [ShowCart, SetShowCart] = useState(false);
  const ShowCartOnClick = () => {
    SetShowCart(true);
  };
  const CloseCartOnclick = () => {
    SetShowCart(false);
  };

  return (
    <CartProvider>
      {ShowCart && <Cart OnClose={CloseCartOnclick} />}
      <Header OnClick={ShowCartOnClick} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
