const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  userId:[{
    type: mongoose.Schema.Types.ObjectId,
    ref:"userData",
  }],
  categoryName: {
    type: String,
    required: true,
  },
  categoryDescription: {
    type: String,
    required: true,
  },
  leavesArray:[
    {
        type:mongoose.Schema.ObjectId,
        ref:'Leave',
    }
]
});

const category = mongoose.model("Category", categorySchema);
module.exports = category;