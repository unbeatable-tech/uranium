const mongoose=require('mongoose')


const userSchema=new mongoose.Schema({

    name:{type:String},
    balance:{type:Number,default:100},
    age:{type:Number},
    address:String,
    gender:{type:String,enum:["male","female","other"]},
    isFreeAppUser:{type:Boolean,default:false}
},{timestamps:true});

 module.exports=mongoose.model('user',userSchema)