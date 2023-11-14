const express = require("express");
const onClearCartApp = express.Router();
onClearCartApp.use(express.json());

onClearCartApp.post("/", async (request, response) => {
  const userCollectionObject = request.app.get("userCollectionObject");
  const userObj = request.body;
  // console.log(userObj);
  let userInDb = await userCollectionObject.findOne({ email: userObj.email });
  userInDb.cartItems = [];
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

module.exports = onClearCartApp;
