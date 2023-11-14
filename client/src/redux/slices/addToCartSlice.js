import { createSlice } from "@reduxjs/toolkit";
// import axios from "axios";

// export const addItemToCart = createAsyncThunk(
//   "additemtocart",
//   async (data, thunkApi) => {
//     const response = await axios
//       .post("/cart/additemtocart", data)
//       .then((res) => res.data);
//     if (response.message === "success") {
//       return response;
//     }
//     if (response.message === "Already added this item to cart") {
//       return response;
//     }
//   }
// );
let addToCartSlice = createSlice({
  name: "addtocart",
  initialState: {
    cartItems: [],
    duplicateItemMessage: "",
  },
  reducers: {
    // addItemToCart: (state, action) => {
    //   let newArray = state.cartItems;
    //   state.cartItems = [...newArray, action.payload];
    // },
    // removeItemFromCart: (state, action) => {
    //   let newArray = state.cartItems.filter((cartItem) => {
    //     if (cartItem.item.title !== action.payload.item.title) {
    //       return cartItem;
    //     }
    //   });
    //   state.cartItems = [...newArray];
    // },
    // clearCartItemsStatus: (state) => {
    //   state.cartItems = [];
    // },
  },
  extraReducers: {
    // [addItemToCart.fulfilled]: (state, action) => {
    //   state.cartItems = action.payload.cartItems;
    //   state.duplicateItemMessage = action.payload.message;
    // },
    // [addItemToCart.rejected]: (state, action) => {
    //   state.cartItems = action.payload.cartItems;
    //   state.duplicateItemMessage = action.payload.message;
    // },
  },
});

// export const {} = addToCartSlice.actions;
export default addToCartSlice.reducer;
