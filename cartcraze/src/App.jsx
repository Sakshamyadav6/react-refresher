import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import Product from "./pages/Product";
import NavBar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Counter from "./pages/Counter";
import NoPage from "./pages/NoPage";
import Profile from "./components/Profile";
import Admin from "./pages/Admin";
import Shipping from "./pages/Shipping";
import Payment from "./pages/Payment";
import PlaceOrder from "./pages/PlaceOrder";
import Confirm from "./pages/Confirm";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/count" element={<Counter />} />
        <Route path="/user/profile/:name" element={<Profile />} />
        <Route path="/admin/:name" element={<Admin />} />
        <Route path="/order/shipping" element={<Shipping />} />
        <Route path="/order/payment" element={<Payment />} />
        <Route path="/order/placeorder" element={<PlaceOrder />} />
        <Route
          path="/order/confirmation/success/:username/:id"
          element={<Confirm />}
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
