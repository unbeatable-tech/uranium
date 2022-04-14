const express = require('express');
const router = express.Router();


const authorcontroller=require('../controllers/authorcontroller')




router.post("/createauthor", authorcontroller.author )
router.post("/createbook", authorcontroller.book )
router.post('/findbooksbyid', authorcontroller.findbooksbyId)
router.get('/updatedbookprice', authorcontroller.updatedbookprice)
router.get('/authorsName', authorcontroller.authorsName)



module.exports = router;



module.exports = router;