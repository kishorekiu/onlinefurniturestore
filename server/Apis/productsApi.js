const express = require("express");
const productsApp = express.Router();

productsApp.get("/", async (request, response) => {
  const productCollectionObject = request.app.get("productCollectionObject");
  const products = await productCollectionObject.findOne({});
  response.send({ message: "success", products: products });
});

module.exports = productsApp;
