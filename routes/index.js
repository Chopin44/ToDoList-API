const express = require('express');
const user = require('./user.router')
const auth = require('../middleware/auth')
const task = require('./task.router')

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "please use endpoint"
    })
})

router.use("/user",  user)
router.use("/task", auth, task)

module.exports = router