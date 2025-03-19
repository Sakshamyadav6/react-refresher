import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [prod, setProd] = useState([]);
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_URL + `/${id}`);
      console.log(response);
      setProd(response);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);
  return <div>ProductDetail</div>;
};

export default ProductDetail;
