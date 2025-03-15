import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import ProdDetail from "./components/ProdDetail";
import ProductCart from "./pages/ProductCart";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProdDetail />} />
        <Route path="/productcart" element={<ProductCart />} />
      </Routes>
    </>
  );
};

export default App;
