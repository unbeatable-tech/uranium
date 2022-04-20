
const express=require('express')
const router=express.Router()
const MiddleWare=require('../controllers/apiController')
router.get('/middleware',MiddleWare.mid1)




module.exports=router