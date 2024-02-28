import { useState } from "react";
import { Header } from "./components/header/Header";
import { Sneakers } from "./pages/home/Sneakers";
import { Cart } from "./pages/home/components/cart/Cart";
function App() {
  const [openCart, setOpenCart] = useState(false);

  openCart
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div className="App">
      <div className={openCart ? "App-back" : ""}></div>
      <Header onClickCart={() => setOpenCart(true)} />
      {openCart ? <Cart onClickClose={() => setOpenCart(false)} /> : null}

      <Sneakers openCart={openCart} />
    </div>
  );
}

export default App;
