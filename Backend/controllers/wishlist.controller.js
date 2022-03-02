const { Wishlist } = require("../modals/wishlist.model");

const addToWishlist = async (req, res) => {
  const body = req.body;
  await Wishlist.exists(
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
            message: "Already in Wishlist",
            available: doc,
          });
        } else {
          try {
            const data = new Wishlist(body);
            const result = await data.save();
            res.json({
              success: true,
              message: "Product has been added in wishlist",
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

const wishlistMiddleware = async (req, res, next, userId) => {
  try {
    const wishlistitem = await Wishlist.find({ customerId: userId });
    if (!wishlistitem) {
      return res.status(400).json({
        success: false,
        message: "No Items in your Wishlist",
      });
    }
    req.wishlistitem = wishlistitem;
  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Cant find your product Catch We got",
      error: `${e}`,
    });
  }
  next();
};

const getWishlistItems = (req, res) => {
  const { wishlistitem } = req;
  wishlistitem.__v = undefined;
  res.json({
    success: true,
    message: "Wishlist Item found",
    wishlistitem: wishlistitem,
  });
};

const deleteItemFromWishlist = async (req, res) => {
  const _id = req.params;
  await Wishlist.findOneAndDelete(
    {
      _id,
    },
    function (err, docs) {
      if (err) {
        return res.json({
          success: false,
          message: "Something went Wrong",
          erro: `${err}`,
        });
      } else {
        return res.json({
          success: true,
          message: "Item Removed Successfully",
          deletedItem: docs,
        });
      }
    }
  );
};

module.exports = {
  addToWishlist,
  wishlistMiddleware,
  getWishlistItems,
  deleteItemFromWishlist,
};
