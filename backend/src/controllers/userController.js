import mongoose from "mongoose";

export async function regiseter(req,res){
    try{

        const {name,email,password}=res.body;
        
        if(!name||!email||!password){
            return res.status(400).json({
                sucess:false,
                message:"All fields are Required"
                
            })
            
        }

        if()



        }
        catch(e){
            console.log(e);

        }
}