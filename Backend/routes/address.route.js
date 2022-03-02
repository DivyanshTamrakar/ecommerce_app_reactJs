const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const {
  AddAddress,
  getCustomerAddress,
  deleteCustomerAddress,
} = require("../controllers/address.controller");

router.use(bodyparser.json());

router.route("/").post(AddAddress);

router.route("/:customerId").get(getCustomerAddress);

router.route("/delete/:_id").get(deleteCustomerAddress);

module.exports = router;
