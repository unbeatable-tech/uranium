const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")

const createAuthor = async (req, res) => {
    let data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}

const createPublisher = async (req, res) => {
    let data= req.body
    let savedData= await publisherModel.create(data)
    res.send({msg: savedData})
}

const createBook = async (req,res) => {
    let data = req.body
    if(data.author && data.publisher){
        let a_check = await authorModel.find({_id: data.author}).select("_id")
        let p_check = await publisherModel.find({_id: data.publisher}).select("_id").lean()
        if(!a_check.length && !p_check.length) 
            res.send({msg: "Author and Publisher Id fields dosen't match our data, hence invalid"})
        else if(!a_check.length && p_check.length) 
            res.send({msg: "Author Id field dosen't match our data, hence invalid"})
        else if(a_check.length && !p_check.length)
            res.send({msg: "Publisher Id field dosen't match our data, hence invalid"})
        else {
            if(!await bookModel.exists(req.body)){ 
                let savedData= await bookModel.create(req.body)
                res.send({msg: savedData})
            } else res.send({msg: "This Book already exits in the collection"})
        }
    }
    else if(!data.author && data.publisher) res.send({msg: "You Must input Author ObjectId"})
    else if(data.author && !data.publisher) res.send({msg: "You must input Publisher ObjectId"})
    else res.send({msg: "You must input Author and Publisher objectId in Book Data"})
} 

const findBook = async (req,res) => {
    let data = await bookModel.find().populate(['author','publisher'])
    res.send({msg: data})
}

const updateBook = async (req,res) => {
    let find_PId = await publisherModel.findOne({name: req.body.publisher}).select('_id')
    let data = await bookModel.updateMany(
                                        {publisher: find_PId},
                                        {$set: {isHardcover: true}}
                                        )
    res.send({msg: data})
}

const updateBookPrice = async (req,res) => {
    let data = await bookModel.updateMany(
                                        {rating: {$gt: 3.5}},
                                        {$inc: {price: 10}}
                                        )
    res.send({msg: data})
}

const updateB = async (req,res) => {
    let a_filter = await authorModel.find({rating: {$gt: 3.5}})
    await bookModel.updateMany({author: a_filter}, {$inc: {price: 10}})
    let data = await bookModel.find({author:a_filter})
    res.send({msg: data})
}

module.exports = {createAuthor, createPublisher, createBook, findBook, updateBook, updateBookPrice, updateB}