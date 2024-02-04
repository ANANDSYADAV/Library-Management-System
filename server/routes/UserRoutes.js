const express = require('express');
const router = express.Router();
const { getAllUsers, registerUser } = require('../controllers/UserContoller')

// router.get('/user/:id', )

router.get('/getAllUsers', getAllUsers);
router.post('/registerUser', registerUser);

module.exports = router;