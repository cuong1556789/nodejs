const bookController = require('../controller/bookController')
var express = require('express');
const router = express.Router()

//add book
router.post('/',bookController.addABook)
//get all book
router.get('/', bookController.getAllBooks)

//get a book
router.get('/:id', bookController.getABooks)

//update a book
router.put('/:id', bookController.updateBooks)

//delete book
router.delete('/:id', bookController.deleteBook)
module.exports = router