const express = require("express");
const addItemToCartApp = express.Router();
addItemToCartApp.use(express.json());
// const bcryptjs = require("bcryptjs");

addItemToCartApp.post("/", async (request, response) => {
  const userCollectionObject = request.app.get("userCollectionObject");
  const { cartItem, userObj } = request.body;
  //   console.log(cartItem, userObj);
  let userInDb = await userCollectionObject.findOne({
    email: userObj.email,
  });
  //   console.log(userInDb);
  if (!userInDb.cartItems) {
    await userCollectionObject.updateOne(
      { email: userObj.email },
      { $set: { cartItems: [] } }
    );
  }
  let indexFound = userInDb.cartItems.findIndex(
    (eachItem) => eachItem.item.title === cartItem.item.title
  );
  //   console.log(indexFound);
  if (indexFound >= 0) {
    response.send({
      message: "Already added this item to cart",
      userObj: userInDb,
    });
  } else {
    userInDb?.cartItems.push(cartItem);
    await userCollectionObject.updateOne(
      { email: userObj.email },
      { $set: { ...userInDb } }
    );
    const updatedUserInDb = await userCollectionObject.findOne({
      email: userObj.email,
    });
    // console.log(updatedUserInDb);
    response.send({ message: "success", userObj: updatedUserInDb });
  }
});

module.exports = addItemToCartApp;
