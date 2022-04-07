const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});
let arr=["amit","kanishq","akhil","shivam","ashish","rahul","harish","vineet","sahil","rohan"]

router.get('/all-candidates',function (req,res)
{


    res.send(arr)
})

router.get('/candidates',function(req,res){
    let result;
    let j=req.query.count
    result=arr.slice(0,j)

    res.send(result)
})



module.exports = router;
// adding this comment for no reason