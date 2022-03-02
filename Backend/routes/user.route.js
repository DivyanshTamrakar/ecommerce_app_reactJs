const express = require("express");
const router = express.Router();
const bodyparser = require("body-parser");
const {
  SignUp,
  SignIn,
  userMiddleware,
  getUserDetails,
  saveUser,
} = require("../controllers/user.controller");
router.use(bodyparser.json());

router.route("/signup").post(SignUp);

router.route("/signin").post(SignIn);

router.param("userId", userMiddleware);

router.route("/:userId").get(getUserDetails).post(saveUser);

module.exports = router;
