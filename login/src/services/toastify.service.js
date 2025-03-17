import { toast } from "react-hot-toast";
const toasterConfig = {
  position: "top-center",
  duration: 4000,
  style: {
    background: "#363636",
    color: "#fff",
  },
  success: {
    duration: 3000,
    iconTheme: {
      primary: "green",
      secondary: "black",
    },
  },
  error: {
    duration: 3000,
    iconTheme: {
      primary: "red",
      secondary: "black",
    },
  },
};

export const successToast = (message) => {
  toast.success(message, toasterConfig);
};
export const errorToast = (message) => {
  toast.error(message, toasterConfig);
};
