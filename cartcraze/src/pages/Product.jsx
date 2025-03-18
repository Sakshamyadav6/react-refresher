import axios from "axios";
import React, { useEffect, useState } from "react";
import { errorToast } from "../services/toastify.service";

const Product = () => {
  const [product, setProduct] = useState();

  const getProduct = async (e) => {
    try {
      const response = await axios.get(import.meta.env.VITE_URL);
      console.log(response);
      setProduct(response);
    } catch (error) {
      console.log(error);
      errorToast(error.message);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return <div>Product</div>;
};

export default Product;
