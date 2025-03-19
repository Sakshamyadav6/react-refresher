import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Toaster } from "react-hot-toast";
import Product from "./pages/Product";
import NavBar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
