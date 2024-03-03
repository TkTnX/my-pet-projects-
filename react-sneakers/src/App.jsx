import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Header } from "./components/header/Header";
import { Sneakers } from "./pages/home/Sneakers";
import { Cart } from "./pages/home/components/cart/Cart";
import { Favorite } from "./pages/favorite/Favorite";
import { Profile } from "./pages/profile/Profile";
function App() {
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://65d89a38c96fbb24c1bbe549.mockapi.io/cartBack")
      .then((res) => {
        setCartItems(res.data);
      });
  }, []);

  const onClickDelete = (id) => {
    axios.delete(`https://65d89a38c96fbb24c1bbe549.mockapi.io/cartBack/${id}`);
    setCartItems((now) => now.filter((obj) => id !== obj.id));
  };

  const onClickDelFav = (id) =>
    setFavoriteItems((now) => now.filter((obj) => id !== obj.id));

  openCart
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div className="App">
      {openCart ? (
        <Cart
          onClickDelete={onClickDelete}
          items={cartItems}
          onClickClose={() => setOpenCart(false)}
        />
      ) : null}

      <Router>
        <Header cartItems={cartItems} onClickCart={() => setOpenCart(true)} />
        <Routes>
          <Route
            path="/"
            element={
              <Sneakers
                setFavoriteItems={setFavoriteItems}
                setCartItems={setCartItems}
                openCart={openCart}
                cartItems={cartItems}
                favoriteItems={favoriteItems}
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
          <Route path="/profile" element={<Profile items={cartItems} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
