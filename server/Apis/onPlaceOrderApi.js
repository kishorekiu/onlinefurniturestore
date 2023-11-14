const express = require("express");
const onplaceorderApp = express.Router();
onplaceorderApp.use(express.json());

onplaceorderApp.post("/", async (request, response) => {
  const userCollectionObject = request.app.get("userCollectionObject");
  const { userObj, billingAddress, orderTotals, orderDateTime } = request.body;
  let userInDb = await userCollectionObject.findOne({ email: userObj.email });
  let orderItem = {
    items: userInDb.cartItems,
    orderTotals: orderTotals,
    billingAddress: billingAddress,
    orderDateTime: orderDateTime,
  };
  if (!userInDb.orders) {
    await userCollectionObject.updateOne(
      { email: userObj.email },
      { $set: { orders: [] } }
    );
  }
  userInDb?.orders.unshift(orderItem);
  await userCollectionObject.updateOne(
    { email: userObj.email },
    { $set: { ...userInDb } }
  );
  const updatedUserInDb = await userCollectionObject.findOne({
    email: userObj.email,
  });
  response.send({ message: "success", userObj: updatedUserInDb });
});

module.exports = onplaceorderApp;
