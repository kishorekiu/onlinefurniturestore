import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./slices/productSlice";
import loginSlice from "./slices/loginSlice";
import addToCartSlice from "./slices/addToCartSlice";
export const store = configureStore({
  reducer: {
    product: productSlice,
    login: loginSlice,
    cart: addToCartSlice,
  },
});
