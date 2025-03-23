import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
  accessToken: "",
  email: "",
  username: "",
  firstName: "",
  lastName: "",
  gender: "",
  image: "",
  refreshToken: "",
};
export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      console.log(action);
      state.isLoggedIn = true;
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
      state.username = action.payload.username;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.gender = action.payload.gender;
      state.image = action.payload.image;
      state.refreshToken = action.payload.refreshToken;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.accessToken = "";
      state.email = "";
      state.username = "";
      state.firstName = "";
      state.lastName = "";
      state.gender = "";
      state.image = "";
      state.refreshToken = "";
    },
  },
});
export const { login, logout } = loginSlice.actions;
export default loginSlice.reducer;
