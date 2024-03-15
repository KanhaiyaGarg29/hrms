const express = require('express');
const router = express.Router();
const {login} =require("../controllers/Auth");
const { addCategory, getAllCategory } = require("../controllers/Category");
const { getAdmin } = require('../controllers/Employees');
const { addLeave, getAllLeaves, updateLeaveStatus, getParticularLeave } = require('../controllers/Leave');


// Route for user login
router.post("/login", login)
router.post("/addcategory",addCategory);
router.get("/getCategory",getAllCategory);
router.get("/getAdmin",getAdmin);
router.post("/addLeave",addLeave);
router.get("/getLeaves",getAllLeaves);
router.put("/updateLeave",updateLeaveStatus);
router.get("/viewLeave/:userId",getParticularLeave);

module.exports = router