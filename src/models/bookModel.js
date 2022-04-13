const mongoose=require('mongoose')
const bookSchema= new mongoose.Schema({
    bookName:{type:String,require:true,unique:true},
    authorName:{type:String},
    price:{
        Indian:String,
        Eropean:String
    },
    year:{type:Number,default:2021},
    stockAvailable:Boolean,
    totalPages:Number


},
{timestamps:true}
);
module.exports=mongoose.model('Bookcollection',bookSchema)
   












