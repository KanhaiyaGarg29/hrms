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
       
        const newTasks=await Task.find({status:'new'});
        const startedTasks=await Task.find({status:'in-progress'});
        const finishedTasks=await Task.find({status:'completed'});
        const due=await Task.find({status:"due"});
        const allTasks = {
            new:newTasks,
            started:startedTasks,
            finished:finishedTasks,
            due:due
        };
        // const allTasks = await Task.find();
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
        const newtasks=await Task.find({category:userCategory,status:"new"});
        const completedtasks=await Task.find({category:userCategory,status:"completed"});
        const startedtasks=await Task.find({category:userCategory,status:"in-progress"});
        const due=await Task.find({category:userCategory,status:"due"});
        const task={
            new:newtasks,
           
            started:startedtasks,
            completed:completedtasks,
            due:due
        }
        return res.status(200).json(
            {
                success:true,
                data:task,
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

exports.updateTaskStatus=async(req,res)=>{
    try{
        const{taskId,taskStatus}=req.body;
        const task=await Task.findOneAndUpdate({_id:taskId},{status:taskStatus},{new:true});
        // await leave.save();
        return res.status(200).json(
            {
                success:true,
                data:task,
                message:`Task ${taskStatus} successfully`
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