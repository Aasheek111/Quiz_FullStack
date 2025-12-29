import Result from "../models/resultModel";

async function createResult(res,req){
    const result= await Result.create(req.body);
    try{

        
        res.status(200,{
            success:true,
            data:result
        })
    }
    catch(e){
        console.log(e)
    }


}