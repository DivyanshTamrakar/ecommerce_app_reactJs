const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const {
  addToCart,
  cartMiddleware,
  getUserCart,
  deleteFromCart,
  deleteAllItems,
} = require("../controllers/cart.controller");
router.use(bodyparser.json());

router.route("/").post(addToCart);

router.param("userId", cartMiddleware);

router.route("/:userId").get(getUserCart);

router.route("/delete/:_id").post(deleteFromCart);

router.route("/delete/all/:customerId").get(deleteAllItems);

module.exports = router;
