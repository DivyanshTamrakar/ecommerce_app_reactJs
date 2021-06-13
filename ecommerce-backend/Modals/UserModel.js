const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        true:true,
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true
    },
    password:{
        type:String,
        trim:true,
        required:true,
        minlength:4,
    },
    mobile:{
      type:Number,
      trim:true,
    },
    cart:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Cart"
    },
    wishlist:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Wishlist"
    },
    addresses:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Address"
    },
    orders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Order"
    }]
},{timestamps:true});


const User = mongoose.model('User',userSchema);
module.exports = { User}