const express = require('express');
const router = express.Router();
const { getAllUsers } = require('../controllers/UserContoller')

// router.get('/user/:id', )

router.get('/getAllUsers', getAllUsers);

module.exports = router;