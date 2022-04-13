const express = require('express');
const router = express.Router();
const bookController = require("../controllers/bookController")
router.post("/createBook", bookController.createBook  )
router.get("/getBooksData", bookController.getBooksData)
router.post("/bookList", bookController.bookList)
router.post("/getBooksInYear", bookController.getBooksInYear)
router.post("/getParticularBooks", bookController.getParticularBooks)
router.get("/getXINRBooks", bookController.getXINRBooks)
router.get("/getRandomBooks", bookController.getRandomBooks)

module.exports = router;