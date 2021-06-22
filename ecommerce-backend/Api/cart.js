var express = require('express');
var router = express.Router();
var { User } = require("../Modals/UserModel");
var { Cart } = require("../Modals/CartModel");
var { extend } = require('lodash');
var bodyparser = require('body-parser');
router.use(bodyparser.json())


router.route('/').
  post(async (req, res) => {
    const body = req.body;
    Cart.exists({
      productId: body.productId,
      customerId: body.customerId
    }, async function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        if (doc === true) {
          return res.json({
            success: false,
            message: "Already in cart",
            available: doc
          })
        }
        else {
          try {
            const data = new Cart(body);
            const result = await data.save(); 
            res.json({
              success: true,
              message: "Product has been added in Cart",
              available:doc
            })
          } catch (e) {
            res.json({
              success: false,
              message: "Something is wrong ",
              error: `${e}`
            })

          }
        }

      }
    });






  })



router.param("userId", async (req, res, next, userId) => {
  try {
    const cartItem = await Cart.find({ customerId: userId });
    if (!cartItem) {
      return res.status(400).json({
        success: false,
        message: "No Items in your Cart",
      })
    }
    req.cartItem = cartItem;


  } catch (e) {
    res.status(400).json({
      success: false,
      message: "Cant find your product Catch We got",
      error: `${e}`
    })

  }
  next();
})

router.route('/:userId')
  .get((req, res) => {
    const { cartItem } = req;
    cartItem.__v = undefined;
    res.json({
      success: true,
      message: "Cart Item found",
      cartItem: cartItem

    })
  })



router.route('/delete/:_id')
  .post((req, res) => {
    const _id = req.params;
    console.log(_id);
    Cart.findOneAndDelete({ _id }, function(err, docs) {
      if (err) {
        return res.json({
          success: false,
          message: "Something went Wrong ",
          erro: `${err}`
        })
      }
      else {
        if (docs === null) {
          return res.json({
            success: false,
            message: "item not found! ",

          })
        }
        else {
          return res.json({
            success: true,
            message: "item deleted ",
            data: docs
          })


        }


      }
    });



  })


  router.route('/delete/all/:customerId')
  .get((req, res) => {
    const customerId = req.params;
    Cart.deleteMany(customerId).then(function(){
      return res.status(200).json({  success:true,message:"all cart items deleted" })
  }).catch(function(error){
    return res.json({  success:false,message:"Something went wrong" })
  });



  })



module.exports = router