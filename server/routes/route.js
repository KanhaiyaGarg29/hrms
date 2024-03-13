const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs")
const userModel = require("../model/employee");
const{getAllEmployees} =require("../controllers/Employees");


router.get("/getAll",getAllEmployees);

router.post("/create", async (req,res)=>{
    const{password}=req.body;
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await new userModel({
        name:req.body.name,
        email:req.body.email,
        password:hashedPassword,
        address:req.body.address,
        category:req.body.category,
        role:req.body.role
    })

    newUser.save().then(response =>{
        // res.send("user is successfully added")
        res.status(200).json({
            success: true,
            message: `Employee added `,
          })
    })
    console.log(req);
    // res.send(req);
    
});
module.exports=router;