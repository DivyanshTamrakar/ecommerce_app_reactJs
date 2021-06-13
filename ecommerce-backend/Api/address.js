var express = require('express');
var router = express.Router();
var { User } = require("../Modals/UserModel");
var { Address } = require("../Modals/AddressModel");
var { extend } = require('lodash');
var bodyparser = require('body-parser');
router.use(bodyparser.json())


// router.param("userId", async (req, res, next, userId) => {
//   try {
//     const address = await Address.find({ customerId: userId });
//     if (!address) {
//       return res.status(400).json({
//         success: false,
//         message: "No address found",
//       })
//     }
//     req.address = address;


//   } catch (e) {
//     res.status(400).json({
//       success: false,
//       message: "Cant find your address Catch We got",
//       error: `${e}`
//     })

//   }
//   next();
// })

// router.use('/', function (req, res, next) {
  
//   console.log('userId:', userId)
//   next();
// })

router.route('/').
post(async (req,res)=>{
  const body = req.body;
  
   try {
    const data = new Address(body);
    const result = await data.save(); 
            res.json({
              success: true,
              message: "Address added!",
            })
          } catch (e) {
            res.json({
              success: false,
              message: "Something is wrong ",
              error: `${e}`
            })

          }

})

router.use('/:customerId', function (req, res, next) {
  const userId = req.params
  next();
})
router.route('/:customerId')
  .get(async (req, res) => {
    const  userId  = req.params

const address = await Address.find(userId);
if(address.length!== 0)
{
  return res.json({
      success: true,
      message: "address Item found",
     address: address

    })
}
else{
  return res.json({
      success: false,
      message: "No address Available ",
     address: address

    })
}
    
  })
// router.route('/delete/:_id')
//   .post((req, res) => {
//     const id = req.params;
//     Cart.findOneAndDelete({ _id: id }, function(err, docs) {
//       if (err) {
//         return res.json({
//           success: false,
//           message: "Something went Wrong ",
//           erro: `${err}`
//         })
//       }
//       else {
//         if (docs === null) {
//           return res.json({
//             success: false,
//             message: "item not found! ",

//           })
//         }
//         else {
//           return res.json({
//             success: true,
//             message: "item deleted ",
//             data: docs
//           })


//         }


//       }
//     });



//   })



module.exports = router