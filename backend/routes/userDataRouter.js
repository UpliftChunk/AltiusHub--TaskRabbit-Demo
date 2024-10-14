const express= require('express');
const router= express.Router();

const {registerUser, loginUser, updateUser} = require('../controllers/userController.js');
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/update', updateUser);

module.exports = router;