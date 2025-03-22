import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isLoggedIn: false,
    accessToken: "",
    email: "",
    username: "",
    firstName: "",
    lastName: "",
    gender: "",
    image: "",
    refreshToken: "",
  },
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
  },
});
export const { login } = loginSlice.actions;
export default loginSlice.reducer;
