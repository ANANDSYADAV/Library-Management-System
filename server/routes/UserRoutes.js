const express = require('express');
const router = express.Router();
const { getAllUsers, registerUser, login } = require('../controllers/UserContoller')

router.get('/getAllUsers', getAllUsers);
router.post('/registerUser', registerUser);
router.post('/login',login);
module.exports = router;