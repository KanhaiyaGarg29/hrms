const express = require('express');
const router = express.Router();
const {login} =require("../controllers/Auth");
const { addCategory, getAllCategory } = require("../controllers/Category");
const { getAdmin } = require('../controllers/Employees');


// Route for user login
router.post("/login", login)
router.post("/addcategory",addCategory);
router.get("/getCategory",getAllCategory);
router.get("/getAdmin",getAdmin)

module.exports = router