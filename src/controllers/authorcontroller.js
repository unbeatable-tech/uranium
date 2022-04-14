const authorModel= require("../models/authormodel")
const BookModel= require("../models/bookModel")
const author= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)        //create author
    res.send({msg: savedData})
}
const book= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)          //create book
    res.send({msg: savedData})
}

const findbooksbyId= async function (req, res) {
    
    let savedData= await authorModel.find({author_name:"Chetan Bhagat"})
    let id = savedData[0].author_id
    let getdata=await BookModel.find({author_id: id}).select({name:1})
    res.send({msg: getdata})
}



const updatedbookprice= async function (req, res) {
    const fandupdate = await BookModel.find({name:"Two states"})
    const id = fandupdate[0].author_id
    const athor=await authorModel.find({author_id:id}).select({author_name:1})
    const neww = fandupdate[0].name
    const updatedprice=await BookModel.findOneAndUpdate({name:neww},{price:100},{new:true}).select({author_name:1,price:1})
    res.send({msg:athor,updatedprice})
}

const authorsName = async function (req,res) {
    const booksId= await BookModel.find({price: {$gte:50, $lte:100}}).select ({author_id:1, _id:0})
    const id = booksId.map(inp => inp.author_id)
    
    let temp =[]
    for(let i=0; i<id.length; i++) {
    let x = id[i]
    const author = await authorModel.find({author_id:x}).select({author_name:1, _id:0})
    temp.push(author)
    const authorName = temp.flat()
    res.send({msg:authorName})
    }
}


module.exports = {author,findbooksbyId,book,updatedbookprice,authorsName}