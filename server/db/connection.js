const mongoose = require('mongoose');

// const uri = "mongodb+srv://kashishsingla324:Kash0211@cluster0.ncyyweg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri="mongodb://127.0.0.1:27017/hrDB"

const connectToDb = () =>{
    mongoose.connect(uri,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    }).then(()=>{
        console.log("database connected");
    }).catch((err)=>{
        console.log("database is not connected");
    })
    
}

module.exports=connectToDb;