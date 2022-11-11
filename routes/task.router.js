const express = require('express');

const { getTask, postTask } = require('../controller/task.controller')

const router = express.Router();

router.get("/", getTask)
router.post("/", postTask)

module.exports = router