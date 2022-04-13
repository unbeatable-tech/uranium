const bookModel = require("../models/bookModel")

const createBook = async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData = async function (req, res) {
    let allBooks=  await bookModel.find()
    res.send({msg: allBooks})
}

const bookList = async function (req, res) {
    let author = req.body.authorName
    let bName = req.body.bookName
    let allBooks=  await bookModel.find({authorName: author, bookName: bName})
    res.send({msg: allBooks})
}

const getBooksInYear = async function (req, res) {
    let year = req.body.year
    let allBooks =  await bookModel.find({year: year})
    res.send({msg: allBooks})
}

const getXINRBooks = async function (req, res) {
    let allBooks =  await bookModel.find({
        $or:[{'price.Indian': "100INR"},{'price.Indian': "200INR"},{'price.Indian': "500INR"}]
    })
    res.send({msg: allBooks})
}

const getRandomBooks  = async function (req, res) {
    let allBooks =  await bookModel.find({
        $or: [{stockAvailable: true},{totalPages:{$gt: 500}}]
    })
    res.send({msg: allBooks})
}

const getParticularBooks = async function (req, res) {
    let rand = req.body
    let allBooks =  await bookModel.find(rand)
    res.send({msg: allBooks})
}

module.exports = {createBook, getBooksData, bookList, getBooksInYear, getParticularBooks, getRandomBooks, getXINRBooks}