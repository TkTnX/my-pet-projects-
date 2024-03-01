import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/header/Header";
import { Sneakers } from "./pages/home/Sneakers";
import { Cart } from "./pages/home/components/cart/Cart";
import { Favorite } from "./pages/favorite/Favorite";
function App() {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);

  const onClickDelete = (id) =>
    setCartItems((now) => now.filter((obj) => id !== obj.id));

  const onClickDelFav = (id) =>
    setFavoriteItems((now) => now.filter((obj) => id !== obj.id));

  openCart
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div className="App">
      <div className={openCart ? "App-back" : ""}></div>
      {openCart ? (
        <Cart
          onClickDelete={onClickDelete}
          items={cartItems}
          onClickClose={() => setOpenCart(false)}
        />
      ) : null}

      <Router>
        <Header onClickCart={() => setOpenCart(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Sneakers
                setFavoriteItems={setFavoriteItems}
                setCartItems={setCartItems}
                openCart={openCart}
              />
            }
          />
          <Route
            path="/favorite"
            element={
              <Favorite
                onClickDelFav={onClickDelFav}
                favoriteItems={favoriteItems}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
