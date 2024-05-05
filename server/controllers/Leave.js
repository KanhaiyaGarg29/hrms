

const Leave=require("../model/leave");
const Category=require("../model/category")
const User = require("../model/employee");

exports.addLeave=async(req,res)=>{
    try{
        const{user,name,startDate,endDate,leaveType,category}=req.body;
        if(!user || !startDate || !endDate || !leaveType){
            return res.status(400).json({
                success: false,
                message: `Please Fill up All the Required Fields`,
              })
        }
        const leave=await Leave.create({userId:user,name,startDate,endDate,leaveType,status:'pending'});
        const currUser=await User.findById(user);
        const leaveId=leave._id;
        currUser.leaves.push(leaveId);
        await currUser.save();
        const cate=await Category.findOne({categoryName:category})
  
        cate.leavesArray.push(leaveId)
        // cate.leaves.push(leave._id);
        await cate.save();

        return res.status(200).json(
            {
                success:true,
                data:leave,
                message:"Leave Submitted successfully"
            }
           )
    }catch(error){
        console.error(error)
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
          success: false,
          message: ` Failure Please Try Again`,
        })
    }
}

exports.getAllLeaves=async(req,res)=>{
    try{
       
        const pendingleaves=await Leave.find({status:'pending'});
        const acceptedleaves=await Leave.find({status:'accepted'});
        const rejectedleaves=await Leave.find({status:'rejected'});
        const allLeaves = {
            pending: pendingleaves,
            accepted: acceptedleaves,
            rejected: rejectedleaves
        };
        return res.status(200).json(
            {
                success:true,
                data:allLeaves,
                message:"Leaves fetched successfully"
            }
           )
    }catch(error){
        console.error(error)
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
          success: false,
          message: ` Failure Please Try Again`,
        })
    }
}

exports.getParticularLeave=async(req,res)=>{
    try{
        const userId=req.params.userId;
        console.log(userId);
        const leave=await Leave.find({userId:userId});
        return res.status(200).json(
            {
                success:true,
                data:leave,
                message:"Leaves fetched successfully"
            }
           )
    }catch(error){
        console.error(error)
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
          success: false,
          message: ` Failure Please Try Again`,
        })
    }
}

exports.updateLeaveStatus=async(req,res)=>{
    try{
        const{leaveId,leaveStatus}=req.body;
        const leave=await Leave.findOneAndUpdate({_id:leaveId},{status:leaveStatus},{new:true});
        // await leave.save();
        return res.status(200).json(
            {
                success:true,
                data:leave,
                message:`Leave ${leaveStatus} successfully`
            }
           )
    }catch(error){
        console.error(error)
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
          success: false,
          message: ` Failure Please Try Again`,
        })
    }
}

exports.getLeaveType=async(req,res)=>{
    try{
        // const users=await User.find({}).aggregate.group({ _id: "$categoryName" });

        // console.log(users)
        const sickLeave=await Leave.find({leaveType:"Sick Leave"})
        const annualLeave=await Leave.find({leaveType:"Annual Leave"})
        const leaves={
            sick:sickLeave,
            annual:annualLeave
        }
        return res.status(200).json({
            success:true,
            data:leaves,
            message:"Leaves fetched successfully"
        })
    }catch(error){
        console.error(error)
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
          success: false,
          message: ` Failure Please Try Again`,
        })
    }

}