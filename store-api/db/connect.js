const mongoose = require("mongoose");

const connectDB = (url) => {
  console.log("DB CONNECTED...");
  mongoose.connect(url);
};

module.exports = connectDB;
