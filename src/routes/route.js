const express = require('express');
const router = express.Router();
const controler = require("../controllers/controller")
const middleware= require("../middlewares/middleware")



router.post('/createUser',middleware.mid ,controler.createUser  );
router.post('/createProduct', controler.createProduct  );
router.post('/createorder',middleware.mid , controler.createorder  );




module.exports = router;