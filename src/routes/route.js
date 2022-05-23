const express = require("express");
const router = express.Router();
const bookController = require('../controller/bookController')


router.post("/book-cover-link", bookController.addLink)
router.post('/addBook', bookController.createBook)

module.exports = router;