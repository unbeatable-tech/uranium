const bookModel=require('../models/bookModel')

const createBook=async function(req,res){
    let data= req.body
    let sdata=await bookModel.create(data)
    res.send({msg:sdata})
}
module.exports.createBook=createBook

const getBooksData=async function(req,res){
    let data= await bookModel.find()
    res.send({msg:data})
   
}
module.exports.getBooksData=getBooksData

const getBooksinYear=async function(req,res){
    let yr=req.body.year
    let books=await bookModel.find().select({year:yr})
    res.send({msg:books})
}
module.exports.getBooksinYear=getBooksinYear


const getParticularBooks=async function(req,res){
    let data=req.body
    let books=await bookModel.find(data)
    res.send({msg:books})
}
module.exports.getParticularBooks=getParticularBooks


const getXINRBooks =async function(req,res){
    let books=await bookModel.find({'price.Indian':{$in:["100","200","500"]}})
res.send({msg:books})

}

module.exports.getXINRBooks=getXINRBooks

const getRandomBooks=async function(req,res){
    let books =await bookModel.find({$or:[{stockAvailable:true},{totalPages:{$gt:500}}]})
res.send({msg:books})
}
module.exports.getRandomBooks=getRandomBooks