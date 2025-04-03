import { Navigate, Route, Routes } from "react-router-dom";
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
import SecureRoute from "./routes/SecureRoute";
import { useSelector } from "react-redux";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return (
    <>
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={isLoggedIn ? <Navigate to={"/product"} /> : <Login />}
        />
        <Route
          path="/signup"
          element={isLoggedIn ? <Navigate to={"/product"} /> : <Signup />}
        />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/" element={<SecureRoute />}>
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
        </Route>
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
