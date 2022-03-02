const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const {
  addToWishlist,
  wishlistMiddleware,
  getWishlistItems,
  deleteItemFromWishlist,
} = require("../controllers/wishlist.controller");
router.use(bodyparser.json());

router.route("/").post(addToWishlist);

router.param("userId", wishlistMiddleware);

router.route("/:userId").get(getWishlistItems);

router.route("/delete/:_id").get(deleteItemFromWishlist);

module.exports = router;
