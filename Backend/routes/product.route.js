const express = require("express");
const router = express.Router();

const bodyparser = require("body-parser");
const {
  getProducts,
  postProducts,
  getParticularProduct,
  postParticularProduct,
  productMiddleware,
  addToWishlistArray,
  removeFromWishlistArray,
} = require("../controllers/product.controller");

router.use(bodyparser.json());

router.route("/").get(getProducts).post(postProducts);

router.param("productId", productMiddleware);

router
  .route("/:productId")
  .get(getParticularProduct)
  .post(postParticularProduct);

router.route("/add/wishlistArray").post(addToWishlistArray);
router.route("/remove/wishlistArray").post(removeFromWishlistArray);

module.exports = router;
