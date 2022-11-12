const express = require('express');

const { 
    getTask,
    getDetailTask, 
    postTask, 
    deleteTask, 
    deleteTaskByID, 
    updateTask } = require('../controller/task.controller')

const router = express.Router();

router.get("/", getTask)
router.get("/detail/:id", getDetailTask)
router.post("/", postTask)
router.delete("/:id", deleteTaskByID)
router.put("/:id", updateTask)
router.delete("/", deleteTask)

module.exports = router