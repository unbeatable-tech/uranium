const mongoose = require("mongoose")
const bookschema = new mongoose.Schema({
    Bookname: {  type:String,required:true,unique:true},
    Authorname: String,
    Category: String,
    year: {
        type : Number,
        maxlength : 4,
        minlength:4,
    } ,
    
},
{ timestamps: true});
module.exports = mongoose.model('User1', bookschema)