const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(url);
  console.log("DB CONNECTED...");
};

module.exports = connectDB;
