const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "enter the name"],
    trim: true,
    maxlength: [20, "no more than 20 characters"]
  },
  completed: {
    type: Boolean,
    default: false
  },
});

module.exports = mongoose.model("Task", TaskSchema);
