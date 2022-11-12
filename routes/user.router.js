const express = require('express');
const { 
    getUser, 
    Register,
    Login
 } = require('../controller/user.controller');

const router = express.Router();

router.get("/", getUser)

router.post("/register", Register)
router.post("/login", Login)

module.exports = router