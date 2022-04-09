const express = require('express');
const logger = require('./logger')
const p=require('./assignment')

const router = express.Router();

router.post('/players',p.PLAYER)
    



   

module.exports = router;
// adding this comment for no reason