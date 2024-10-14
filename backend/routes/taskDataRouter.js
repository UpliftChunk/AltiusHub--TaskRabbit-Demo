const express= require('express');
const router= express.Router();

const {registerTask, updateTask, getTasks} = require('../controllers/taskController.js');
router.get('/getTasks', getTasks);
router.post('/addTask', registerTask);
router.post('/updateTask', updateTask);

module.exports = router;