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