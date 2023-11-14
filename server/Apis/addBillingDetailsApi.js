const express = require("express");
const addBillingDetailsApp = express.Router();
addBillingDetailsApp.use(express.json());

addBillingDetailsApp.post("/", async (request, response) => {
  const userCollectionObject = request.app.get("userCollectionObject");
  const { billingDetailsObj, userObj } = request.body;

  let userInDb = await userCollectionObject.findOne({ email: userObj.email });
  //   console.log(userInDb);
  if (!userInDb.billingDetails) {
    await userCollectionObject.updateOne(
      { email: userObj.email },
      { $set: { billingDetails: [] } }
    );
  }
  // console.log(billingDetailsObj);
  let indexFound = userInDb.billingDetails.findIndex(
    (eachItem) => eachItem.streetaddress === billingDetailsObj.streetaddress
  );
  // console.log(indexFound);

  if (indexFound >= 0) {
    response.send({
      message: "Street Address Already Added",
      userObj: userInDb,
    });
  } else {
    userInDb?.billingDetails.push(billingDetailsObj);
    await userCollectionObject.updateOne(
      { email: userObj.email },
      { $set: { ...userInDb } }
    );
    const updatedUserInDb = await userCollectionObject.findOne({
      email: userObj.email,
    });
    response.send({ message: "success", userObj: updatedUserInDb });
  }
});

module.exports = addBillingDetailsApp;
