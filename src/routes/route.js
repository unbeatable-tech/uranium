const express=require('express')
const router=express.Router()
const batchController=require('../controllers/batchController')
router.post('/batches',batchController.createBatches)
router.post('/developers',batchController.createDevelopers)
router.get('/scholarship-developers',batchController.scholarShip)
router.get('/developers',batchController.develOpers)



module.exports=router