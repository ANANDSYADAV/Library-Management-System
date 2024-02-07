const express = require('express');
const router = express.Router();
const { getAllBooks } = require('../controllers/BookController')

router.get('/getAllBooks', getAllBooks);

module.exports = router;