const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs")
const userModel = require("../model/employee");
const{getAllEmployees} =require("../controllers/Employees");
const Category=require("../model/category")


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
    const savedUser = await newUser.save();
    let existingCategoryId = await Category.findOne({ categoryName: req.body.category });
    // Push the user id to the userId array of the category
    existingCategoryId.userId.push(savedUser._id);

    // Save the category
    await existingCategoryId.save();
    res.status(200).json({
        success: true,
        message: `Employee added`,
        user: savedUser
    });
    
});
module.exports=router;