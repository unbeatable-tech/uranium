const batchModel=require('../models/batchModel')
const developerModel=require('../models/developerModel')

const createBatches=async function(req,res) {

    const data= req.body
    const saveData=await batchModel.create(data)
    res.send({msg:saveData})
}
module.exports.createBatches=createBatches
 const createDevelopers=async function(req,res){
      const data=req.body
      const saveData=await developerModel.create(data)
      res.send({
        msg:saveData
      })
 }

 module.exports.createDevelopers=createDevelopers

 const scholarShip=async function(req,res){

    let result=await developerModel.find({$and:[{gender:"female"},{percentage:{$gte:"70"}}]})
    if(!result.length){
        res.send({msg:"no result"})
    }
    res.send({msg:result})

 }

 module.exports.scholarShip=scholarShip

 const develOpers= async function(req,res){
     let data=req.query.percentage
     let sData=req.query.program
     let result=await batchModel.find({name:sData}).select("_id")
     let ans=await developerModel.find({batch:result,percentage:{$gte:data}})
     res.send({msg:ans})
 }
 module.exports.develOpers=develOpersbrac