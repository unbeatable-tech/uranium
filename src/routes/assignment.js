let PLAYER = function(req,res){


    let players =
       [
           {
               "name": "manish",
               "dob": "1/1/1995",
               "gender": "male",
               "city": "jalandhar",
               "sports": [
                   "swimming"
               ]
           },
           {
               "name": "gopal",
               "dob": "1/09/1995",
               "gender": "male",
               "city": "delhi",
               "sports": [
                   "soccer"
               ]
           },
           {
               "name": "lokesh",
               "dob": "1/1/1990",
               "gender": "male",
               "city": "mumbai",
               "sports": ["soccer"]
                   
               
           },
       ]
       const newPlayer=req.body.name
let flag=1
for(let i=0;i<players.length;i++){
    if(players[i].name===newPlayer){
        flag=0
    }

}
if(flag==1){
    players.push(req.body)
    res.send(players)
}

else{
    res.send("players already exists")
}
}
module.exports.PLAYER=PLAYER