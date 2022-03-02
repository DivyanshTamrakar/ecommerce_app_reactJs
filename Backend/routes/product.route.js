const express = require("express");
const router = express.Router();
const { Product } = require("../modals/product.model");

const bodyparser = require("body-parser");
const {
  getProducts,
  postProducts,
  getParticularProduct,
  postParticularProduct,
  productMiddleware
} = require("../controllers/product.controller");

router.use(bodyparser.json());

router.route("/").get(getProducts).post(postProducts);

router.param("productId", productMiddleware);

router
  .route("/:productId")
  .get(getParticularProduct)
  .post(postParticularProduct);

module.exports = router;
