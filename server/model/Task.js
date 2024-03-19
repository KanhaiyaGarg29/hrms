const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  deadline: {
    type: Date,
    // required: true,
  },
  category: {
    type: String,
  },
  status: {
    type: String,
    enum: [ "new","in-progress", "completed","due"],
    default: "new",
  },
});

const task = mongoose.model("TASK", taskSchema);
module.exports = task;
