const express = require('express');
const Razorpay = require('razorpay');
const app = express();
const PORT = 5000;
var cors = require('cors');
var { initializeConnection } = require('./ConnectionDB/connectionDB')
var productApi = require('./Api/product');
var userApi = require('./Api/user');
var cartApi = require('./Api/cart');
var wishlistApi = require('./Api/wishlist');
var addressApi = require('./Api/address');
const { Product } = require('./Modals/ProductModel');
var bodyparser = require('body-parser');
var mongoose = require("mongoose");


app.use(bodyparser.json())



app.use(cors());



// connect with mongodb via mongooose
initializeConnection();

// product from DB
app.use('/products',productApi);
// user from DB
app.use('/users',userApi);
app.use('/carts',cartApi);
app.use('/wishlists',wishlistApi);
app.use('/address',addressApi);


app.get('/',(req,res)=>{
  res.status(200).json({message:"Hello World "})})


  const razorpay = new Razorpay({
    key_id: 'rzp_test_x5vD6ApR8W8yaS',
    key_secret: 'u8qgWgtlNAuiPDtIy6SvojFM'
  })



  app.post('/razorpay', async (req, res) => {

    const details = req.body
    console.log(details);
    const payment_capture = 1
    const amount = 499
    const currency = 'INR'
  
    const options = {
      amount: amount * 100,
      currency,
      payment_capture
    }
  
    try {
      const response = await razorpay.orders.create(options)
      console.log(response)
      res.json({
        success:true,
        id: response.id,
        currency: response.currency,
        amount: response.amount
      })
    } catch (error) {
      console.log(error)
    }
  })





  app.post('/additem', async (req, res) => {
    const data = req.body;
    const id = mongoose.Types.ObjectId(data.userid);
    Product.findByIdAndUpdate(
      { _id: data.productId },
      { $push: { cartarray: id } },
      { new: true },
      function (err, docs) {
        if (err) {
         return res.json({ success: false, error: err });
        } else {
          return res.json({
            success: true,
            message: "cart array item added",
            result: docs,
          });
        }
      }
    );
       
  });


  app.post('/removeitem',async (req, res) => {
    const { productId, userid } = req.body;
    const id = mongoose.Types.ObjectId(userid);
  
    Product.findByIdAndUpdate(
      { _id: productId },
      { $pull: { cartarray: id } },
      { new: true },
      function (err, docs) {
        if (err) {
          res.json({ success: false, error: err });
        } else {
          res.json({
            success: true,
            message: "item successfully removed ",
            result: docs,
          });
        }
      }
    );
  });
  


app.listen(process.env.PORT || PORT, () => {
  console.log(`server started at Port : ${PORT}`);
});







