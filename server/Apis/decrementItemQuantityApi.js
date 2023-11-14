const express = require("express");
const decrementitemquantityApp = express.Router();
decrementitemquantityApp.use(express.json());

decrementitemquantityApp.post("/", async (request, response) => {
  const userCollectionObject = request.app.get("userCollectionObject");
  const { cartItem, userObj } = request.body;
  let userInDb = await userCollectionObject.findOne({ email: userObj.email });

  let updatedCartItems = userInDb.cartItems.map((eachItem) => {
    if (eachItem.item.title === cartItem.item.title) {
      eachItem.count = eachItem.count - 1;
    }
    return eachItem;
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

module.exports = decrementitemquantityApp;
