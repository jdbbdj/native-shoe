import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  deliveryFee: 60,
  freeDelivery: 200,
};

export const cartSlice = createSlice({
  name: "carts",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const newProduct = action.payload.product;
      state.carts.push({ product: newProduct, quantity: 1 });
    },
    changeQuantity: (state, action) => {
      const newProduct = action.payload.product;
    },
  },
});
