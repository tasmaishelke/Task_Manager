const express = require('express');
const router = express.Router();
const
{
    AllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask,
} = require('../controller/taskController')


 
router.route('/').get(AllTasks).post(createTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)







module.exports = router;