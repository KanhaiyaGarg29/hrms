const userModel = require("../model/employee");

exports.getAllEmployees=async(req,res)=>{
    try{
        const user=await userModel.find({ role: { $ne: "Admin" } }).select('-password');
        return res.status(200).json(
            {
                success:true,
                // count: count,
                data:user,
                message:"Employees fetched successfully"
            }
           )
    }catch(error){
        console.error(error)
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
          success: false,
          message: `Failure Please Try Again`,
        })
    }
}

exports.getAdmin=async(req,res)=>{
    try{
       
        const user=await userModel.find({ role: { $ne: "Employee" } }).select('-password');
        return res.status(200).json(
            {
                success:true,
                data:user,
                message:"Admin fetched successfully"
            }
           )
    }catch(error){
        console.error(error)
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
          success: false,
          message: `Failure Please Try Again`,
        })
    }
}