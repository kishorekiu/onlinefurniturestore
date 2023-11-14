const express = require("express");
const userApp = express.Router();
userApp.use(express.json());
const bcryptjs = require("bcryptjs");

userApp.post("/register", async (request, response) => {
  const userCollectionObject = request.app.get("userCollectionObject");
  const userObj = request.body;
  const userAlreadyInDb = await userCollectionObject.findOne({
    email: userObj.email,
  });
  // console.log(userAlreadyInDb);
  if (userAlreadyInDb !== null) {
    response.send({ message: "User already registered...please login" });
  } else {
    let hashPassword = await bcryptjs.hash(userObj.password, 6);
    userObj.password = hashPassword;
    let updatedUserInDb = {
      ...userObj,
      cartItems: [],
      favouriteItems: [],
      billingDetails: [],
      orders: [],
    };
    await userCollectionObject.insertOne(updatedUserInDb);
    response.send({ message: "User Created" });
  }
});

userApp.post("/login", async (request, response) => {
  const userObj = request.body;
  const userCollectionObject = request.app.get("userCollectionObject");
  const user = await userCollectionObject.findOne({
    email: userObj.email,
  });
  if (user === null) {
    response.send({ message: "User not registered...please register" });
  } else {
    const isTrue = await bcryptjs.compare(userObj.password, user.password);
    if (isTrue !== true) {
      response.send({ message: "Incorrect Password" });
    } else {
      response.send({ message: "success", userObj: user });
    }
  }
});

// userApp.post("/", async (request, response) => {
//   const productCollectionObject = request.app.get("productCollectionObject");
//   const products = await productCollectionObject.findOne({});
//   response.send({ message: "success", products: products });
// });

module.exports = userApp;
