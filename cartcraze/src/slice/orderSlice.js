import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  order: {
    shippingAddress: {},
    paymentMethod: [],
    cardDetails: {},
    cart: [],
  },
};
export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addCart: (state, data) => {
      const item = data.payload;

      const existItem = state.order.cart.find((x) => x.id === item.id);
      if (existItem) {
        state.order.cart = state.order.cart.map((x) =>
          x.id === item.id ? item : x
        );
      } else {
        state.order.cart = [...state.order.cart, item];
      }
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
