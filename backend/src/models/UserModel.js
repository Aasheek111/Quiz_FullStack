const mongoose= require('mongoose');

const UserSchema=new mongoose.Schema({
    user:String,
    password:String,
    email:String

})
module.exports=mongoose.model('User',UserSchema);