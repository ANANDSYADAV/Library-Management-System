const express = require('express');
const router = express.Router();
const { getAllUsers, registerUser, loginUser } = require('../controllers/UserContoller')

router.get('/getAllUsers', getAllUsers);

router.post('/registerUser', registerUser);

router.post('/login', loginUser);

module.exports = router;