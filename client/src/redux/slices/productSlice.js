import { createSlice } from "@reduxjs/toolkit";

let productSlice = createSlice({
  name: "products",
  initialState: {
    products: {},
    currentProduct: {},
  },
  reducers: {
    addProductsToStore: (state, action) => {
      state.products = action.payload;
    },
    addToCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
});

export const { addProductsToStore, addToCurrentProduct } = productSlice.actions;

export default productSlice.reducer;
