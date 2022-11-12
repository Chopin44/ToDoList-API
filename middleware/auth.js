const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const auth = app.use((req, res, next) => {
  const tokenReq = req.headers.authorization;
  const token = tokenReq.split(" ")[1];

  if (!token) {
    res.status(403).send({
      message: "opps something error!",
      error: "forbidden",
    });
  }

  try {
    const verify = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verify);
    if (!verify) {
      res.status(401).send({
        message: "unauthorized!",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "opps something error!",
      error: error.message,
    });
  }

  next();
});

module.exports = auth;
