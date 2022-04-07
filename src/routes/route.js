const express = require('express');
const log = require ('../logger/logger')
const logg = require ('../util/helper')
const format= require ('../validator/formatter')
const lodash = require ('lodash')
const router = express.Router();
const month=["January","February","March","April","May","June","July","August","September","October","November","December"]
const arr=[1,3,5,7,9,11,13,15,17,19]
let arr1=[1,2,3,4,5]
    let arr2=[5,6,7,3,4,1,2,3]
    let arr3=[5,6,7,8,9,1,2,3,4]
    let arr4=[7,8,9,10,11,1,2,3,4,5,6]
    let arr5=[7,8,9,10,11,1,2,3,4,5,6,12,13,14,15]
    const pairs = [["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"]]

    router.get('/hello',function(req,res){
    
        res.send("hey!")
     console.log(lodash.chunk(month,4))
     console.log(lodash.tail(arr))
     console.log(lodash.union(arr1,arr2,arr3,arr4,arr5))
        console.log(lodash.fromPairs(pairs))
    
    
    })

router.get('/test-me', function (req, res) {
    console.log("hgjhgjhg")
    log.a()
    res.send('My first ever api!')
});
router.get('/test-me1', function (req, res) {
    console.log('date is',logg.DATE)
    console.log('month is',logg.MONTH)
    console.log('BATCH',logg.BATCH)
    res.send('date,month,batch')
});

router.get('/test-me2', function (req, res) {
    console.log()
    format.trim()
    format.lower()
    format.upper()
    res.send('trimmed , lower, uppercase')
});


module.exports = router;
// adding this comment for no reason