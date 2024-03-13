const Category=require("../model/category");

exports.addCategory=async(req,res)=>{
    try{
        const{categoryName,categoryDescription}=req.body;
        if(!categoryName || !categoryDescription){
            return res.status(400).json({
                success: false,
                message: `Please Fill up All the Required Fields`,
              })
        }
        const category=await Category.create({categoryName,categoryDescription});
        return res.status(200).json(
            {
                success:true,
                data:category,
                message:"Category created successfully"
            }
           )
    }catch(error){
        console.error(error)
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
          success: false,
          message: `Category Failure Please Try Again`,
        })
    }
}

exports.getAllCategory=async(req,res)=>{
    try{
       
        const categories=await Category.find({});
        return res.status(200).json(
            {
                success:true,
                data:categories,
                message:"Category fetched successfully"
            }
           )
    }catch(error){
        console.error(error)
        // Return 500 Internal Server Error status code with error message
        return res.status(500).json({
          success: false,
          message: `Category Failure Please Try Again`,
        })
    }
}