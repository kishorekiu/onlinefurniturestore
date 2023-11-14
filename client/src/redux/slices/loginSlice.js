import { createSlice } from "@reduxjs/toolkit";
import {
  IncrementItemQuantity,
  addBillingDetails,
  addItemToCart,
  addItemToFavourite,
  decrementItemQuantity,
  onClearCart,
  onPlaceOrder,
  removeBillingDetails,
  removeItemFromCart,
  removeItemFromFavourite,
  userLogin,
} from "../../components/utils/apis";

// export const userLogin = createAsyncThunk(
//   "userlogin",
//   async (userObj, thunkApi) => {
//     let response = await axios.post("/user/login", userObj);
//     let data = response.data;
//     if (data.message === "success") {
//       return data.userObj;
//     }
//     if (
//       data.message === "Incorrect Password" ||
//       data.message === "User not registered...please register"
//     ) {
//       return thunkApi.rejectWithValue(data);
//     }
//   }
// );

let loginSlice = createSlice({
  name: "loginSlice",
  initialState: {
    userObj: {},
    isSuccess: false,
    isLoading: false,
    isErr: false,
    errMsg: "",
    sameBillingDetailsErrMsg: "",
  },
  reducers: {
    clearLoginStatus: (state) => {
      state.userObj = null;
      state.isSuccess = false;
      state.isLoading = false;
      state.isErr = false;
      state.errMsg = "";
    },
    updateCartStatus: (state, action) => {
      const newUserObj = state.userObj;
      state.userObj = { ...newUserObj, cartItems: action.payload };
    },
  },
  extraReducers: {
    [userLogin.pending]: (state, action) => {
      state.userObj = null;
      state.isSuccess = false;
      state.isLoading = true;
      state.isErr = false;
      state.errMsg = "";
    },
    [userLogin.fulfilled]: (state, action) => {
      state.userObj = action.payload;
      state.isSuccess = true;
      state.isLoading = false;
      state.isErr = false;
      state.errMsg = "";
    },
    [userLogin.rejected]: (state, action) => {
      state.userObj = null;
      state.isSuccess = false;
      state.isLoading = false;
      state.isErr = true;
      state.errMsg = action.payload.message;
    },
    [addItemToCart.fulfilled]: (state, action) => {
      state.userObj = action.payload.userObj;
    },
    [removeItemFromCart.fulfilled]: (state, action) => {
      state.userObj = action.payload.userObj;
    },
    [IncrementItemQuantity.fulfilled]: (state, action) => {
      state.userObj = action.payload.userObj;
    },
    [decrementItemQuantity.fulfilled]: (state, action) => {
      state.userObj = action.payload.userObj;
    },
    [addItemToFavourite.fulfilled]: (state, action) => {
      state.userObj = action.payload.userObj;
    },
    [removeItemFromFavourite.fulfilled]: (state, action) => {
      state.userObj = action.payload.userObj;
    },
    [addBillingDetails.fulfilled]: (state, action) => {
      state.userObj = action.payload.userObj;
      state.sameBillingDetailsErrMsg = action.payload.message;
    },
    [removeBillingDetails.fulfilled]: (state, action) => {
      state.userObj = action.payload.userObj;
    },
    [onPlaceOrder.fulfilled]: (state, action) => {
      state.userObj = action.payload.userObj;
    },
    [onClearCart.fulfilled]: (state, action) => {
      state.userObj = action.payload.userObj;
    },
  },
});
export const { clearLoginStatus, updateCartStatus } = loginSlice.actions;
export default loginSlice.reducer;
