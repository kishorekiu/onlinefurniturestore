const express = require("express");
const incrementitemquantityApp = express.Router();
incrementitemquantityApp.use(express.json());

incrementitemquantityApp.post("/", async (request, response) => {
  const userCollectionObject = request.app.get("userCollectionObject");
  const { cartItem, userObj } = request.body;
  let userInDb = await userCollectionObject.findOne({ email: userObj.email });
  //   let cartItemInDb = userInDb.cartItems.filter((eachItem) => {
  //     eachItem.item.title === cartItem.item.title;
  //   });
  //   cartItemInDb.count += 1;

  let updatedCartItems = userInDb.cartItems.map((eachItem) => {
    if (eachItem.item.title === cartItem.item.title) {
      eachItem.count = eachItem.count + 1;
    }
    return eachItem;
  });
  //   console.log(updatedCartItems);
  userInDb.cartItems = updatedCartItems;
  await userCollectionObject.updateOne(
    { email: userObj.email },
    { $set: { ...userInDb } }
  );
  const updatedUserInDb = await userCollectionObject.findOne({
    email: userObj.email,
  });
  // console.log(updatedUserInDb);
  response.send({ message: "success", userObj: updatedUserInDb });
});

module.exports = incrementitemquantityApp;
