const express = require('express');
const router = express.Router();
<<<<<<< HEAD
const { getAllUsers, registerUser, loginUser } = require('../controllers/UserContoller')

router.get('/getAllUsers', getAllUsers);
router.post('/registerUser', registerUser);
router.post('/login', loginUser);

=======
const { getAllUsers, registerUser, login } = require('../controllers/UserContoller')

router.get('/getAllUsers', getAllUsers);
router.post('/registerUser', registerUser);
router.post('/login',login);
>>>>>>> f097a945c6ecf85ebd3c167699b86467f2d4d949
module.exports = router;