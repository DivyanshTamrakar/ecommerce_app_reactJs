const { User } = require("../modals/user.model");
const { extend } = require("lodash");

const SignUp = async (req, res) => {
  try {
    let { name, email, password, mobile } = req.body;
    const check = await User.findOne({ email });
    if (check) {
      return res.json({ success: false, message: "Email already exist" });
    } else {
      const data = new User({ name, email, password });
      const result = await data.save(); //
      res.json({
        success: true,
        message: "You have registered successfully",
      });
    }
  } catch (e) {
    res.json({
      success: false,
      message: "Something is wrong while creating user ",
      error: `${e}`,
    });
  }
};

const SignIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const email = await User.findOne({ email: req.body.email });
    const password = await User.findOne({ password: req.body.password });

    if (email) {
      if (password) {
        return res.status(200).json({
          success: true,
          user: {
            name: email.name,
            email: email.email,
            uid: email._id,
          },
        });
      } else {
        return res.json({ success: false, message: "Incorrect password" });
      }
    }

    res.json({
      success: false,
      message: "Email address is not registered, Register first and then try",
    });
  } catch (error) {
    if (error) {
      res.status(404).json({
        message: "Something went wrong with server",
        error: `${error}`,
      });
    }
  }
};
 
const userMiddleware = async (req, res, next, userId) => {
    try {
      const user = await User.findById(userId);
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Cant find your product",
        });
      }
      req.user = user;
    } catch (e) {
      res.status(400).json({
        success: false,
        message: "Cant find your user , Catch We got",
      });
    }
    next();
  }

const getUserDetails = (req, res) => {
    const { user } = req;
    user.__v = undefined;

    res.json({
      success: true,
      message: "user found ",
      user: user,
    });
  }  

const saveUser = async (req, res) => {
    try {
      const productUpdate = req.body;
      let { product } = req;
      product = extend(product, productUpdate);
      product = await product.save();
      res.json({
        success: true,
        message: "Data Updated successfully ",
        product: product,
      });
    } catch (e) {
      res.json({
        success: false,
        message: "data updation fail",
        error: `${e}`,
      });
    }
  }  
module.exports = { SignUp, SignIn, userMiddleware, getUserDetails, saveUser };
