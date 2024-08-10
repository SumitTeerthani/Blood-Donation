const mongoose =require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
       type:String,
       required:true
    },
    email:{type: String ,required:true,unique:true,lowercase:true},
    password:{type: String ,required:true},
    phone:{type:String,unique:true},
    bloodGroup:{type:String },
    age:{type:Number},
    gender:{type:String},
    address:{type:String},
    state:{type:String},
    district:{type:String},
    role:{type:String},
});

module.exports=mongoose.model('user',userSchema);