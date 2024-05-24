const express = require('express');
const router = express.Router();
const {login} =require("../controllers/Auth");
const { addCategory, getAllCategory, getUsersByCategory } = require("../controllers/Category");
const { getAdmin } = require('../controllers/Employees');
const { addLeave, getAllLeaves, updateLeaveStatus, getParticularLeave, getLeaveType } = require('../controllers/Leave');
const {addTask,getAllTasks,getParticularTask,updateTaskStatus} = require("../controllers/Task")


// Route for user login
router.post("/login", login)
router.post("/addcategory",addCategory);
router.get("/getCategory",getAllCategory);
router.get("/getAdmin",getAdmin);
router.post("/addLeave",addLeave);
router.get("/getLeaves",getAllLeaves);
router.get("/getLeaveType/:userId",getLeaveType);
router.put("/updateLeave",updateLeaveStatus);
router.get("/viewLeave/:userId",getParticularLeave);
router.post("/addTask",addTask);
router.get("/viewTask",getAllTasks);
router.get("/etask/:userCategory",getParticularTask);
router.put("/updateTaskStatus",updateTaskStatus);
router.post("/getUsersByCategory",getUsersByCategory);

module.exports = router