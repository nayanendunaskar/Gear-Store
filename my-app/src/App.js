import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ProductList } from "./pages/ProductList";
import { SingleProduct } from "./pages/SingleProduct";
import { Cart } from "./pages/Cart";
import { Wishlist } from "./pages/Wishlist";
import { Navbar } from "./navigation/Navbar";
import { Footer } from "./components/Footer";
import { Signup } from "./Auth/Signup";
import { Login } from "./Auth/Login";
import { Checkout } from "./pages/Checkout";
import { RequireAuth } from "./Auth/RequireAuth";
import { Profile } from "./pages/Profile";
import { ToastContainer } from "react-toastify";
import { Success } from "./pages/Success";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ToastContainer position="bottom-right" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route
          path="/cart"
          element={
            <RequireAuth>
              <Cart />
            </RequireAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequireAuth>
              <Wishlist />
            </RequireAuth>
          }
        />
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/success"
          element={
            <RequireAuth>
              <Success />
            </RequireAuth>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;