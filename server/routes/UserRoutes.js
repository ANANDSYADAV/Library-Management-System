const express = require('express');
const router = express.Router();
const { getAllUsers, registerUser, loginUser } = require('../controllers/UserContoller')

router.get('/getAllUsers', getAllUsers);
router.post('/registerUser', registerUser);
<<<<<<< HEAD

router.post('/login', loginUser);

=======
>>>>>>> 1912ff58b01197270e8493ee2bbaad665cec4ae4
module.exports = router;