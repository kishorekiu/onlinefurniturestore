const express = require("express");
const removeItemFromFavouriteApp = express.Router();
removeItemFromFavouriteApp.use(express.json());

removeItemFromFavouriteApp.post("/", async (request, response) => {
  const userCollectionObject = request.app.get("userCollectionObject");
  const { item, userObj } = request.body;
  let userInDb = await userCollectionObject.findOne({ email: userObj.email });

  let updatedFavouriteItems = userInDb.favouriteItems.filter(
    (eachItem) => eachItem.title !== item.title
  );
  userInDb.favouriteItems = updatedFavouriteItems;
  await userCollectionObject.updateOne(
    { email: userObj.email },
    { $set: { ...userInDb } }
  );
  const updatedUserInDb = await userCollectionObject.findOne({
    email: userObj.email,
  });
  response.send({ message: "success", userObj: updatedUserInDb });
});

module.exports = removeItemFromFavouriteApp;
