import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../slice/counterSlice";
import loginReducer from "../slice/loginSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: loginReducer,
  },
});
