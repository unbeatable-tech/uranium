const express = require('express');
const router = express.Router();

const User1Model= require('../models/bookschema')
const User2 = require('../controllers/bookcontroller')




router.post('/BOOKS', User2.BOOK)
router.get('/Books1', User2.GBOOK)