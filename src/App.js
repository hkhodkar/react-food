import { useState } from "react";
import Header from "./Layout/header/Header";
import Meals from "./Meals/Meals";
import Cart from "./Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartIsShown, SetCartIsShown] = useState(false);

  const showCartHandler = () => {
    SetCartIsShown(true);
  };
  const hideCartHandler = () => {
    SetCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCard={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
