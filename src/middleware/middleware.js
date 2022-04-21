const jwt =require('jsonwebtoken')
 const mid1=async function(req,res,next){
     let headers=req.headers['X-auth-token']
     if(!headers)
     headers=req.headers['x-auth-token']
     if(!headers)
     return res.send({status:false,msg:"add token"})
     let token=req.headers['x-Auth-token'];
     if(!token) token=req.headers['x-auth-token']

     if(!token)
     return res.send({status:false,msg:"token must be present"})
     console.log(token)
     let decodedToken=jwt.verify(token,'functionup-uranium')
     if(!decodedToken)
     return res.send({status:false,msg:"invalid token"})
     next()
 }
 module.exports.mid1=mid1

