const express = require('express');
const user = require('./user.router')
const task = require('./task.router')

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "please use endpoint"
    })
})

router.use("/user", user)
router.use("/task", task)

module.exports = router