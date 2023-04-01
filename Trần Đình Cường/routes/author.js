
const authorController = require('../controller/authorController')
const { getAllAuthors } = require('../controller/authorController');
var express = require('express');
const router = express.Router()


//add author
router.post('/', authorController.addAuthor)

//add all author
router.get('/', authorController.getAllAuthors)

//get an author
router.get('/:id', authorController.getAnAuthors)

//update  author
router.put('/:id', authorController.updateAuthor)

//delete author
router.delete('/:id', authorController.deleteAuthor)
module.exports = router