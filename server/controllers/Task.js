const Task = require("../model/Task");

exports.addTask=async(req,res)=>{
    try{
        const{task,deadline,category}=req.body;
        if(!task){
            return res.status(400).json({
                success: false,
                message: `Please Fill up All the Required Fields`,
              })
        }
        const Atask=await Task.create({task,deadline,category});
        return res.status(200).json(
            {
                success:true,
                data:Atask,
                message:"Task Submitted successfully"
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

exports.getAllTasks=async(req,res)=>{
    try{
       
        // const pendingleaves=await Leave.find({status:'pending'});
        // const acceptedleaves=await Leave.find({status:'accepted'});
        // const rejectedleaves=await Leave.find({status:'rejected'});
        // const allLeaves = {
        //     pending: pendingleaves,
        //     accepted: acceptedleaves,
        //     rejected: rejectedleaves
        // };
        const allTasks = await Task.find();
        return res.status(200).json(
            {
                success:true,
                data:allTasks,
                message:"Tasks fetched successfully"
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

exports.getParticularTask=async(req,res)=>{
    try{
        const userCategory=req.params.userCategory;
        // console.log(userCategory);
        const task=await Task.find({category:userCategory});
        return res.status(200).json(
            {
                success:true,
                data:task,
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