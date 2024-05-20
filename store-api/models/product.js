const mongoose = require("mongoose");

const productSchmema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name required"],
  },
  price: {
    type: Number,
    required: [true, "price required"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "caressa", "marcos"],
      message: "{VALUE} is not supported",
    },
    // enum: ["ikea", "liddy", "caressa", "marcos"],
  },
});

module.exports = mongoose.model('Product' , productSchmema)