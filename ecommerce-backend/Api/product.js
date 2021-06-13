var express = require('express');
var router = express.Router();
var { Product } = require("../Modals/ProductModel");
var { extend } = require('lodash');
var { arr } = require('../FakeData/faker');
var bodyparser = require('body-parser');



router.use(bodyparser.json())



router.route('/').
get(async (req, res) => {
  try {
    const products = await Product.find();
    res.json({
      success: true,
      message: "data fetch form database",
      product: products
    })
  } catch (e) {
    res.status(500).json({
      success: false,
      message: `${e}`
    })
  }
}).
post(async (req, res) => {
  try {
     for(let i = 0 ; i<arr.length;i++){
    const data = new Product(arr[i]);
    const result = await data.save(); // 
      }
    res.json({
      success: true,
      message: "Product has been added"
    })
  } catch (e) {
    res.json({
      success: false,
      message: "Something is wrong ",
      error:`${e}`
    })

  }
})



router.param("productId",async (req,res,next,productId)=>{
  try{
  const product = await Product.findById(productId);
  console.log(product);
  if(!product){
    return res.status(400).json({
      success:false,
      message:"Cant find your product",
    })
  }
  req.product = product;


  }catch(e){
    res.status(400).json({
      success:false,
      message:"Cant find your product Catch We got",
    })
    
  }
 next();
})

router.route('/:productId')
.get((req,res)=>{
const { product } = req;
// product.__v = undefined;

  res.json({
    success:true,
    message:"product found ",
    product:product

  })
})
.post(async (req,res)=>{
   try{
     const productUpdate = req.body;
     let { product } = req;
   product = extend(product,productUpdate);
   product = await product.save();
    res.json({
    success:true,
    message:"Data Updated successfully ",
    product:product
    })
   }catch(e){
     res.json({
    success:false,
    message:"data upation fail",
    error:`${e}`
    })
   }

})




module.exports = router