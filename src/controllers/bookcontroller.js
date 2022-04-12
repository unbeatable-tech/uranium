
const User1Model= require('../models/bookschema')



const BOOK =  async function (req,res){
    let DATA = req.body
    let SDATA = await User1Model.create(DATA)
    res.send({msg:SDATA})
}
const GBOOK = async function (req,res){
      let all= await User1Model.find()

res.send({msg:all})
}
module.exports.BOOK=BOOK
module.exports.GBOOK=GBOOK