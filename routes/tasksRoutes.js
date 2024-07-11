const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/Task')

router.get('/add', TaskController.createTask)
router.post('/add', TaskController.createTaskSave)
router.post('/remove', TaskController.removeTask)
router.get('/edit/:id', TaskController.editTask)
router.post('/edit', TaskController.updateTask)
router.post('/done', TaskController.doneTask)
router.get('/', TaskController.showTasks)


module.exports = router