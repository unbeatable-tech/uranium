const express=require('express')
const router=express.Router()

const bookcontroller=require('../controllers/bookController')
router.post('/createAuthor',bookcontroller.createAuthor)
router.post('/createPublisher',bookcontroller.createPublisher)
router.post('/createBook',bookcontroller.createBook)
router.get('/findBook',bookcontroller.createBook)
router.put('/updatebook',bookcontroller.updateBook)
router.put('/updateBookprice',bookcontroller.updateBookPrice)
router.put('/updateB',bookcontroller.updateB)



module.exports=router