
const express= require('express')
const router=express.Router()
const bookController =require('../controllers/bookController')
router.post('/createBook',bookController.createBook)
router.get('/getBookData',bookController.getBooksData)
router.get('/getBooksinYear',bookController.getBooksinYear)
router.post('/getParticularBooks',bookController.getParticularBooks)
router.get('/getXINRBooks',bookController.getXINRBooks)
router.get('/getRandombooks',bookController.getRandomBooks)
module.exports=router;








