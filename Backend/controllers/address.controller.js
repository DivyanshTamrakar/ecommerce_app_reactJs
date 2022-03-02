var { Address } = require("../modals/address.model");

const AddAddress = async (req, res) => {
  const body = req.body;

  try {
    const data = new Address(body);
    const result = await data.save();
    res.json({
      success: true,
      message: "Address added!",
    });
  } catch (e) {
    res.json({
      success: false,
      message: "Something is wrong ",
      error: `${e}`,
    });
  }
};

const getCustomerAddress = async (req, res) => {
  const userId = req.params;

  const address = await Address.find(userId);
  if (address.length !== 0) {
    return res.json({
      success: true,
      message: "address Item found",
      address: address,
    });
  } else {
    return res.json({
      success: false,
      message: "No address Available ",
      address: address,
    });
  }
};

const deleteCustomerAddress = async (req, res) => {
  const _id = req.params;
  await Address.findOneAndDelete(
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
          message: "address successfully deleted",
          deletedaddress: docs,
        });
      }
    }
  );
};
module.exports = { AddAddress, getCustomerAddress, deleteCustomerAddress };
