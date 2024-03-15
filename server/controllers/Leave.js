
const Leave=require("../model/leave");

exports.addLeave=async(req,res)=>{
    try{
        const{user,name,startDate,endDate,leaveType}=req.body;
        if(!user || !startDate || !endDate || !leaveType){
            return res.status(400).json({
                success: false,
                message: `Please Fill up All the Required Fields`,
              })
        }
        const leave=await Leave.create({userId:user,name,startDate,endDate,leaveType,status:'pending'});
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


exports.updateLeaveStatus=async(req,res)=>{
    try{
        const{userId,leaveStatus}=req.body;
        const leave=await Leave.findOneAndUpdate({userId:userId},{status:leaveStatus},{new:true});
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