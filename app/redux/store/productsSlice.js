import { createSlice } from "@reduxjs/toolkit";
import products from "../../utils/products";
const initialState = {
  products: products,
  selectedProduct: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      const productId = action.payload;
      state.selectedProduct = state.products.find((p) => p.id === productId);
    },
  },
});
