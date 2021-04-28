var mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: {
    type:String,
    required:"Name is required",
  },
  productModel: {
    type:Number,
    required:"Model no is required",
    unique:true,

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


const Product = mongoose.model('products', ProductSchema);

module.exports = { Product }
