import axios from "axios";
import { errorToast } from "./toastify.service";

export const deleteProd = async (url) => {
  try {
    const response = await axios.delete(`${import.meta.env.VITE_URL}/${url}`);
    return response;
  } catch (error) {
    errorToast(error.message);
  }
};
export const updateProd = async (url, prod) => {
  try {
    const response = await axios.patch(`https://dummyjson.com/${url}`, prod, {
      headers: { "Content-Type": "application/json" },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const addProd = async (url, prod) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_URL}/${url}`,
      prod,
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
  }
};
