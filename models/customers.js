const Joi = require("joi");
const mongoose = require("mongoose");

const Customer = mongoose.model(
  "Customer",
  new mongoose.Schema({
    name: {
      type: String,
      required: true,
      minLenght: 5,
      maxLength: 50,
    },
    isGold: {
      type: Boolean,
      default: false,
    },
    phone: {
      type: String,
      required: true,
      minLenght: 5,
      maxLength: 50,
    },
  })
);

function validateCustomer(customer) {
  const schema = {
    name: Joi.string().min(4).max(50).required(),
    phone: Joi.string().min(4).max(50).required(),
    isGold: Joi.boolean(),
  };

  return Joi.validate(customer, schema);
}

exports.Customer = Customer;
exports.validate = validateCustomer;
