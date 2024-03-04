import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import { Header } from "./components/header/Header";
import { Sneakers } from "./pages/home/Sneakers";
import { Cart } from "./pages/home/components/cart/Cart";
import { Favorite } from "./pages/favorite/Favorite";
import { Profile } from "./pages/profile/Profile";
import AppContext from "./context";

function App() {
  const [card, setCard] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [favoriteItems, setFavoriteItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const cartResp = await axios.get(
          "https://65d89a38c96fbb24c1bbe549.mockapi.io/cartBack"
        );

        const favResp = await axios.get(
          "https://65e441cf3070132b3b24702e.mockapi.io/favorites"
        );
        const itemsResp = await axios
          .get("https://65d89a38c96fbb24c1bbe549.mockapi.io/cards")
          .finally(() => setIsLoading(false));

        setCartItems(cartResp.data);
        setFavoriteItems(favResp.data);
        setCard(itemsResp.data);
      } catch (error) {
        alert("ошибка при запросе данных");
      }
    }
    fetchData();
  }, []);

  const onClickDelete = (id) => {
    axios.delete(`https://65d89a38c96fbb24c1bbe549.mockapi.io/cartBack/${id}`);
    setCartItems((now) => now.filter((obj) => id !== obj.id));
  };

  const onClickDelFav = (id) => {
    axios.delete(`https://65e441cf3070132b3b24702e.mockapi.io/favorites/${id}`);
    setFavoriteItems((now) => now.filter((obj) => id !== obj.id));
  };

  openCart
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{ card, cartItems, favoriteItems, isItemAdded }}
    >
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
                  isLoading={isLoading}
                  card={card}
                />
              }
            />
            <Route
              path="/favorite"
              element={<Favorite onClickDelFav={onClickDelFav} />}
            />
            <Route path="/profile" element={<Profile items={cartItems} />} />
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
