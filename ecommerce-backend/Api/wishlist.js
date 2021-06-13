var express = require('express');
var router = express.Router();
var { User }=require("../Modals/UserModel");
var { Wishlist }=require("../Modals/WishlistModel");
var { extend } = require('lodash');
var bodyparser = require('body-parser');
router.use(bodyparser.json())




router.route('/').
post(async (req, res) => {
  const body = req.body;
  Wishlist.exists({
      productId: body.productId,
      customerId: body.customerId
    }, async function(err, doc) {
      if (err) {
        console.log(err);
      } else {
        if (doc === true) {
          return res.json({
            success: false,
            message: "Already in Wishlist",
            available: doc
          })
        }
        else {
          try {
            const data = new Wishlist(body);
            const result = await data.save(); 
            res.json({
              success: true,
              message: "Product has been added in wishlist",
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
    })
})



router.param("userId",async (req,res,next,userId)=>{
  try{
  const wishlistitem = await Wishlist.find({customerId:userId});
  if(!wishlistitem){
    return res.status(400).json({
      success:false,
      message:"No Items in your Wishlist",
    })
  }
  req.wishlistitem = wishlistitem;


  }catch(e){
    res.status(400).json({
      success:false,
      message:"Cant find your product Catch We got",
      error:`${e}`
    })
    
  }
 next();
})

router.route('/:userId')
.get((req,res)=>{
const { wishlistitem } = req;
wishlistitem.__v = undefined;
  res.json({
    success:true,
    message:"Wishlist Item found",
    wishlistitem: wishlistitem

  })
})



module.exports = router