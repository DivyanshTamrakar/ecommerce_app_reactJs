var mongoose = require('mongoose');

const AddressSchema = new mongoose.Schema({
  name: {
    type:String,
    required:"Name is required",
  },
  customerId : {
    type:String,
    required:"Customer Id is required",
  },
  address : {
    type:String,
    required:true,
    },
  mobile:{
      type:Number,
      required:"mobile cant be empty",
    },
  state:{
    type:String,
    required:"State cant be empty" 
  },
  city:{
    type:String,
    required:"City cant be empty" 
  },
  pincode:{
    type:Number,
    required:"Pincode cant be empty" 
  }


}, {
  // Make Mongoose use Unix time (seconds since Jan 1, 1970)
  timestamps:true
});


const Address = mongoose.model('addresses', AddressSchema);

module.exports = { Address }


              
            