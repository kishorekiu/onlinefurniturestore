import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userRegistration = async (userObj) => {
  try {
    const response = await axios
      .post("https://onlinefurniturestore-server.vercel.app/user/register", userObj)
      .then((res) => res.data);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const userLogin = createAsyncThunk(
  "userlogin",
  async (userObj, thunkApi) => {
    try {
      let response = await axios.post("https://onlinefurniturestore-server.vercel.app/user/login", userObj);
      let data = response.data;
      if (data.message === "success") {
        return data.userObj;
      }
      if (
        data.message === "Incorrect Password" ||
        data.message === "User not registered...please register"
      ) {
        return thunkApi.rejectWithValue(data);
      }
    } catch (err) {
      console.log(err);
    }
  }
);

export const addItemToCart = createAsyncThunk(
  "additemtocart",
  async (data, thunkApi) => {
    const response = await axios
      .post("https://onlinefurniturestore-server.vercel.app/cart/additemtocart", data)
      .then((res) => res.data);
    if (response.message === "success") {
      return response;
    }
    if (response.message === "Already added this item to cart") {
      return response;
    }
  }
);

export const removeItemFromCart = createAsyncThunk(
  "removeitemfromcart",
  async (data) => {
    const response = await axios
      .post("https://onlinefurniturestore-server.vercel.app/cart/removeitemfromcart", data)
      .then((res) => res.data);
    if (response.message === "success") {
      return response;
    }
  }
);

export const IncrementItemQuantity = createAsyncThunk(
  "incrementitemquantity",
  async (data) => {
    const response = await axios
      .post("https://onlinefurniturestore-server.vercel.app/cart/incrementitemquantity", data)
      .then((res) => res.data);
    if (response.message === "success") {
      return response;
    }
  }
);

export const decrementItemQuantity = createAsyncThunk(
  "decrementitemquantity",
  async (data) => {
    const response = await axios
      .post("https://onlinefurniturestore-server.vercel.app/cart/decrementitemquantity", data)
      .then((res) => res.data);
    if (response.message === "success") {
      return response;
    }
  }
);

export const addItemToFavourite = createAsyncThunk(
  "additemtofavourite",
  async (data) => {
    try {
      const response = await axios
        .post("https://onlinefurniturestore-server.vercel.app/favourite/additemtofavourite", data)
        .then((res) => res.data);
      if (response.message === "success") {
        return response;
      }
    } catch (err) {
      console.log(err);
    }
  }
);

export const removeItemFromFavourite = createAsyncThunk(
  "removeitemfromfavourite",
  async (data) => {
    try {
      const response = await axios
        .post("https://onlinefurniturestore-server.vercel.app/favourite/removeitemfromfavourite", data)
        .then((res) => res.data);
      if (response.message === "success") {
        return response;
      }
    } catch (err) {
      console.log(err);
    }
  }
);

export const addBillingDetails = createAsyncThunk(
  "addbillingdetails",
  async (data) => {
    try {
      const response = await axios
        .post("https://onlinefurniturestore-server.vercel.app/user/addbillingdetails", data)
        .then((res) => res.data);
      // if (response.message === "success") {
      // }
      return response;
    } catch (err) {
      console.log(err);
    }
  }
);

export const removeBillingDetails = createAsyncThunk(
  "addbillingdetails",
  async (data) => {
    try {
      const response = await axios
        .post("https://onlinefurniturestore-server.vercel.app/user/removebillingdetails", data)
        .then((res) => res.data);
      if (response.message === "success") {
        return response;
      }
    } catch (err) {
      console.log(err);
    }
  }
);

export const onPlaceOrder = createAsyncThunk("onplaceorder", async (data) => {
  try {
    const response = await axios
      .post("https://onlinefurniturestore-server.vercel.app/user/placeorder", data)
      .then((res) => res.data);
    if (response.message === "success") {
      return response;
    }
  } catch (err) {
    console.log(err);
  }
});

export const onClearCart = createAsyncThunk("onclearcart", async (data) => {
  try {
    const response = await axios
      .post("https://onlinefurniturestore-server.vercel.app/user/clearcart", data)
      .then((res) => res.data);
    if (response.message === "success") {
      return response;
    }
  } catch (err) {
    console.log(err);
  }
});
