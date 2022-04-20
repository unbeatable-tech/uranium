const dateTime=require("node-datetime")
const mid1= function (req,res){
let DT=dateTime.create()
let format=DT.format('d/m/y H:M:S')
let url=req.url
let ip=req.ip
console.log(format,url,ip)
res.send("over and out")

}

module.exports.mid1=mid1