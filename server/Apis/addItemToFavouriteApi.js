const express = require("express");
const addItemToFavouriteApp = express.Router();
addItemToFavouriteApp.use(express.json());

addItemToFavouriteApp.post("/", async (request, response) => {
  const userCollectionObject = request.app.get("userCollectionObject");
  const { item, userObj } = request.body;
  let userInDb = await userCollectionObject.findOne({ email: userObj.email });

  if (!userInDb.favouriteItems) {
    await userCollectionObject.updateOne(
      { email: userObj.email },
      { $set: { favouriteItems: [] } }
    );
  }

  let indexFound = userInDb.favouriteItems.findIndex(
    (eachItem) => eachItem.title === item.title
  );
  //   console.log(indexFound);
  if (indexFound >= 0) {
    response.send({
      message: "Already added this item to cart",
      userObj: userInDb,
    });
  } else {
    userInDb?.favouriteItems.push(item);
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

module.exports = addItemToFavouriteApp;
