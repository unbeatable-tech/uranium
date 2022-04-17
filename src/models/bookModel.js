const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId
const bookSchema=new mongoose.Schema({
name:{
    type:String,required:true,
},
author:{ type:ObjectId,ref:'Author1'},
price:Number,
rating:Number,
isHardcover:{type:Boolean,default:false},
publisher:{type:ObjectId,ref:'Publisher1'},

},{timestamps:true});
module.exports=mongoose.model('Book1',bookSchema)
