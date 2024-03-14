const mongoose = require("mongoose");

const leaveSchema = new mongoose.Schema({
    userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"userData",
    required: true,
  },
  name:{
    type:String,
    required:true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate:{
    type:Date,
    required:true
  },
  leaveType:{
    type:String,
    required:true,
  },
  status: { type: String,
     enum: ['pending', 'accepted', 'rejected'],
      default: 'pending' }
});

const leave = mongoose.model("Leave", leaveSchema);
module.exports = leave;