const mongoose =require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
       type:String,
       required:true
    },
    email:{type: String ,required:true,unique:true,lowercase:true},
    password:{type: String ,required:true},
    bloodGroup:{type:String , required:true},
    age:{type:Number},
    gender:{type:String},
    address:{type:String},
    state:{type:String},
    district:{type:String},

});

module.exports=mongoose.model('user',userSchema);