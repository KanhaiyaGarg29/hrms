const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    deadline:{
        type: Date,
        // required: true,
    },
    category:{
        type:String
    }
})

const task=mongoose.model("TASK",taskSchema);
module.exports = task;