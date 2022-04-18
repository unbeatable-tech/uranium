const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId
const developerSchema=new mongoose.Schema({


name:String,
gender:{
    type:String,
    enum:["male","female","other"]
},
percentage:Number,
batch:{
    type:ObjectId,
    ref:"Batch"
},


},{timestamps:true});
module.exports=mongoose.model("Developer",developerSchema)
