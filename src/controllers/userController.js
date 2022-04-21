const userModel=require('../models/userModel')
const jwt=require('jsonwebtoken')

const createUser=async function(req,res){
    let data=req.body
    let sdata=await userModel.create(data)
    res.send({msg:sdata})
}
module.exports.createUser=createUser

const loginUser=async function(req,res){
    let userName=req.body.emailId
    let password=req.body.password
    let user=await userModel.findOne({emailId:userName,password:password})
if(!user)
return res.send({status:false,msg:"username or password is not correct"})

let token=jwt.sign({

    userId:user._id.toString(),
    batch:"Uranium",
    organisation:"FUNCTIONUP",
},
"functionup-uranium"
);
res.setHeader("x-auth-token",token)
res.send({status:true,data:token})



};
module.exports.loginUser=loginUser

const getUserData=async function(req,res){
    let userId=req.params.userId;
    let userDetails= await userModel.findById(userId);
    if(!userDetails)
    return res.send({status:false,msg:"No such user exists"})
    res.send({status:true,data:userDetails})
}

module.exports.getUserData=getUserData

const updateUser=async function(req,res){
    let userId=req.params.userId
    let user=await userModel.findById(userId)
    if(!user)
    return res.send({status:false,msg:"NO SUCH USERS EXISTS"})
    let userData=req.body
    let updatedUser=await userModel.findOneAndUpdate({_id:userId},userData,{new:1})
 res.send({status:true,msg:updatedUser})   
}
module.exports.updateUser=updateUser



const deleteUser=async function(req,res){
    let userId=req.params.userId

    let user=await userModel.findById({_id:userId})
    if(!user)
    return res.send({status:false,msg:"no such users exists"})

    let savedData=await userModel.findOneAndUpdate({_id:userId},{$set:{isDeleted:true},new:true}).select({isDeleted:1,_id:0})
    res.send({msg:savedData})
}
module.exports.deleteUser=deleteUser