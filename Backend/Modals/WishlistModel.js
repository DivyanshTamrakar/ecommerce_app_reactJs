var mongoose = require('mongoose');

const WishlistSchema = new mongoose.Schema({
  name: {
    type:String,
    required:"Name is required",
  },
  image:{
    type : String,
    required:"Image is mandatory",
  },
  productId:{
    type:String,
    required:"Product Id is required",
  },
  customerId : {
    type:String,
    required:"Customer Id is required",
  },
  inStock:{
    type : Boolean,
    required:"Stock is mandatory",
  },
  fastDelivery:{
    type : Boolean,
    required:"fast Deliver is mandatory",
  },
  productModel: {
    type:String,
    required:false,
    },
  price:{
      type:Number,
      required:"price cant be empty",
    },
  productUrl:{
    type:String,
    required:"url is must"
  },
  productdescription:{
    type:String,
    required:"Description is must",
    minLength:[20,"Description must  be greater than 20 words"]
  }


}, {
  // Make Mongoose use Unix time (seconds since Jan 1, 1970)
  timestamps:true
});


const Wishlist = mongoose.model('wishlist', WishlistSchema);

module.exports = { Wishlist }
