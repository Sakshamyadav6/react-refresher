import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {
    shippingAddress: {},
    paymentMethod: [],
    cardDetails: {},
    cart: {},
  },
};
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addCart: (state, data) => {
      state.cart = data.payload;
    },
    addShippingAddress: (state, data) => {
      state.shippingAddress = data.payload;
    },
    addPaymentMethod: (state, data) => {
      state.paymentMethod = data.payload;
    },
    addCardDetails: (state, data) => {
      state.cardDetails = data.payload;
    },
  },
});

export default orderSlice.reducer;
export const { addShippingAddress, addPaymentMethod, addCardDetails, addCart } =
  orderSlice.actions;
