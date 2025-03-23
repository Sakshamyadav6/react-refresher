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
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
