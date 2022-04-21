const mongoose=require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId
 const orderSchema=new mongoose.Schema({

ammount:Number,
isFreeApp:Boolean,
userId:{
    type:ObjectId,
    ref:'USER2'
},
productId:{
    type:ObjectId,
    ref:'Product'
},
date:{type:Date}


 },{timestamps:true});

 module.exports=mongoose.model('Order',orderSchema)