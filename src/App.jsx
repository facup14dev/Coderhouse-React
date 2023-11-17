import Navbar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import Cart from "./components/Cart/Cart";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShoppingCartProvider from "./context/ShoppingCartContext";
import BuyOut from "./components/BuyOut/BuyOut";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ShoppingCartProvider>

          <Navbar />

          <Routes>
            <Route exact path="/" element={<ItemListContainer />} />

            <Route exact path="/cart" element={<Cart />} />

            <Route exact path="/product/:id" element={<ItemDetailContainer />} />

            <Route exact path="/category/:category" element={<ItemListContainer />} />

            <Route exact path="/buyout" element={<BuyOut />} />
          </Routes>

          <Footer />

        </ShoppingCartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
