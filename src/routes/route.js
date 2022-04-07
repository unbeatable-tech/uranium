const express = require('express');
const logger = require('./logger')

const router = express.Router();

let movie=["rang de basanti","RRR","the kashmir files","the shinning","lord of rings","sholay"]

router.get('/movies',function(req,res){
    res.send(movie)
})

router.get('/movies/:indexNumber',function(req,res){
let values=req.params.indexNumber
let result=movie[values]

if(values>movie.length){
    res.send("use a valid index")
}

else{
    res.send(result)
}


})

router.get('/films',function(req,res){
let film=    [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]
       
res.send(film)
    
})

router.get('/films/:filmId',function(req,res){
    let film=    [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo"
       }]

      
       let value= req.params.filmId
       let no =0
       for(let i=0;i<film.length;i++){
           if(value==film[i].id){
               res.send(film[i])
               no=1
               break
           }
       }

       if(no ==0){
           res.send("No movie exists with this id")

           
       }

})
   

module.exports = router;
// adding this comment for no reason