const express = require("express");
const removeItemFromCartApp = express.Router();
removeItemFromCartApp.use(express.json());

removeItemFromCartApp.post("/", async (request, response) => {
  const userCollectionObject = request.app.get("userCollectionObject");
  const { item, userObj } = request.body;
  let userInDb = await userCollectionObject.findOne({ email: userObj.email });
  let updatedCartItems = userInDb.cartItems.filter((cartItem) => {
    if (cartItem.item.title !== item.title) {
      return cartItem;
    }
  });
  userInDb.cartItems = updatedCartItems;
  await userCollectionObject.updateOne(
    { email: userObj.email },
    { $set: { ...userInDb } }
  );
  const updatedUserInDb = await userCollectionObject.findOne({
    email: userObj.email,
  });
  response.send({ message: "success", userObj: updatedUserInDb });
});

module.exports = removeItemFromCartApp;
