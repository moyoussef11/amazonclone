import { Route, Routes } from "react-router-dom";
import Home from "./website/Home";
import Details from "./Components/products/Details";
import HeaderTop from "./Components/header/HeaderTop";
import Cart from "./Components/cart/Cart";
import WishList from "./Components/cart/WishList";
function App() {
  return (
    <>
      <HeaderTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/details/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishList" element={<WishList />} />
      </Routes>
    </>
  );
}

export default App;
