const express = require("express");
const path = require("path");
const mongoClient = require("mongodb").MongoClient;
const app = express();

// app.use(express.static(path.join(__dirname, "../client/build")));
app.use(express.static("https://onlinefurniturestore.vercel.app");


const DB_URL =
  "mongodb+srv://kishorekrissh7:kishorekrissh7@cluster0.slyeo.mongodb.net/?retryWrites=true&w=majority";

//   "mongodb+srv://kishorekrissh7:<mypassword>@cluster0.slyeo.mongodb.net/?retryWrites=true&w=majority";

mongoClient
  .connect(DB_URL)
  .then((client) => {
    const dbObj = client.db("onlinefurniturestore");
    const productCollectionObject = dbObj.collection("productcollection");
    app.set("productCollectionObject", productCollectionObject);
    console.log("connected to productcollection");
  })
  .catch((err) => console.log("error in connecting to productcollection, err"));

mongoClient
  .connect(DB_URL)
  .then((client) => {
    const dbObj = client.db("onlinefurniturestore");
    const userCollectionObject = dbObj.collection("usercollection");
    app.set("userCollectionObject", userCollectionObject);
    console.log("connected to usercollection");
  })
  .catch((err) => console.log("error in connecting to usercollection, err"));

const productsApp = require("./Apis/productsApi");
app.use("/products", productsApp);

const userApp = require("./Apis/userApi");
app.use("/user", userApp);

const addItemToCartApp = require("./Apis/addItemToCartApi");
app.use("/cart/additemtocart", addItemToCartApp);

const removeItemFromCartApp = require("./Apis/removeItemFromCartApi");
app.use("/cart/removeitemfromcart", removeItemFromCartApp);

const incrementitemquantityApp = require("./Apis/incrementItemQuantityApi");
app.use("/cart/incrementitemquantity", incrementitemquantityApp);

const decrementitemquantityApp = require("./Apis/decrementItemQuantityApi");
app.use("/cart/decrementitemquantity", decrementitemquantityApp);

const addItemToFavouriteApp = require("./Apis/addItemToFavouriteApi");
app.use("/favourite/additemtofavourite", addItemToFavouriteApp);

const removeItemFromFavouriteApp = require("./Apis/removeItemFromFavouriteApi");
app.use("/favourite/removeitemfromfavourite", removeItemFromFavouriteApp);

const addBillingDetailsApp = require("./Apis/addBillingDetailsApi");
app.use("/user/addbillingdetails", addBillingDetailsApp);

const removeBillingDetailsApp = require("./Apis/removeBillingDetailsApi");
app.use("/user/removebillingdetails", removeBillingDetailsApp);

const onplaceorderApp = require("./Apis/onPlaceOrderApi");
app.use("/user/placeorder", onplaceorderApp);

const onClearCartApp = require("./Apis/onClearCartApi");
app.use("/user/clearcart", onClearCartApp);

app.listen(5000, () => console.log("server running on 5000..."));
