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
