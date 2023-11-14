const express = require("express");
const removeBillingDetailsApp = express.Router();
removeBillingDetailsApp.use(express.json());

removeBillingDetailsApp.post("/", async (request, response) => {
  const userCollectionObject = request.app.get("userCollectionObject");
  const { item, userObj } = request.body;
  let userInDb = await userCollectionObject.findOne({ email: userObj.email });

  let updatedBillingDetails = userInDb.billingDetails.filter((eachItem) => {
    if (eachItem.streetaddress !== item.streetaddress) {
      return eachItem;
    }
  });
  userInDb.billingDetails = updatedBillingDetails;
  await userCollectionObject.updateOne(
    { email: userObj.email },
    { $set: { ...userInDb } }
  );
  const updatedUserInDb = await userCollectionObject.findOne({
    email: userObj.email,
  });
  response.send({ message: "success", userObj: updatedUserInDb });
});
module.exports = removeBillingDetailsApp;
