const { Cart } = require("../modals/cart.model");

const addToCart = async (req, res) => {
  const body = req.body;
  Cart.exists(
    {
      productId: body.productId,
      customerId: body.customerId,
    },
    async function (err, doc) {
      if (err) {
        console.log(err);
      } else {
        if (doc === true) {
          return res.json({
            success: false,
            message: "Already in cart",
            available: doc,
          });
        } else {
          try {
            const data = new Cart(body);
            const result = await data.save();
            res.json({
              success: true,
              message: "Product has been added in Cart",
              available: doc,
            });
          } catch (e) {
            res.json({
              success: false,
              message: "Something is wrong ",
              error: `${e}`,
            });
          }
        }
      }
    }
  );
};

const cartMiddleware = async (req, res, next, userId) => {
  try {
    const cartItem = await Cart.find({ customerId: userId });
    if (!cartItem) {
      return res.status(400).json({
        success: false,
        message: "No Items in your Cart",
      });
    }
    req.cartItem = cartItem;
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Cant find your product Catch We got",
      error: `${e}`,
    });
  }
  next();
};

const getUserCart = (req, res) => {
  const { cartItem } = req;
  cartItem.__v = undefined;
  res.json({
    success: true,
    message: "Cart Item found",
    cartItem: cartItem,
  });
};

const deleteFromCart = async (req, res) => {
  const _id = req.params;
  await Cart.findOneAndDelete({ _id }, function (err, docs) {
    if (err) {
      return res.json({
        success: false,
        message: "Something went Wrong ",
        erro: `${err}`,
      });
    } else {
      if (docs === null) {
        return res.json({
          success: false,
          message: "item not found! ",
        });
      } else {
        return res.json({
          success: true,
          message: "item deleted ",
          data: docs,
        });
      }
    }
  });
};

const deleteAllItems = async (req, res) => {
  const customerId = req.params;
  await Cart.deleteMany(customerId)
    .then(() => {
      return res
        .status(200)
        .json({ success: true, message: "all cart items deleted" });
    })
    .catch((error) => {
      return res.json({ success: false, message: "Something went wrong" });
    });
};
module.exports = {
  addToCart,
  cartMiddleware,
  getUserCart,
  deleteFromCart,
  deleteAllItems,
};
