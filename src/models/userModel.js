const  mongoose=require('mongoose')
 const userSchema=new mongoose.Schema({


    firstName:{type:String,require:true},
    lastName:{type:String,require:true},
    mobile:{type:String,require:true},
    emailId:{type:String,require:true},
    password:{type:String,require:true},
    gender:{type:String},
    isDeleted:{type:Boolean,default:false},
    age:{type:Number},

 },{timestamps:true});
 module.exports=mongoose.model('yousers',userSchema)
