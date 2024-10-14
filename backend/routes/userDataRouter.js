const express= require('express');
const router= express.Router();

const {registerUser, loginUser, updateUser} = require('../controllers/userController.js');
router.post('/register', ()=>{
   console.log('user Registered');
});

module.exports = router;