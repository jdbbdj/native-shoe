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
      const cartItem = state.carts.find((p) => p.product.id === newProduct.id);
      if (cartItem) {
        cartItem.quantity += 1;
      } else {
        state.carts.push({ product: newProduct, quantity: 1 });
      }
    },
    changeQuantity: (state, action) => {
      const { productID, amount } = action.payload;
      const cartItem = state.carts.find((p) => p.product.id === productID);
      if (cartItem) {
        if (cartItem.quantity === 0) {
          amount === -1
            ? (cartItem.quantity = 0)
            : (cartItem.quantity += amount);
        } else {
          cartItem.quantity += amount;
        }
      }
    },
  },
});
