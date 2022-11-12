const express = require("express");
const app = express();
const allRouter = require("./routes");
require("dotenv").config();
const db = require("./config/config");

app.use(express.json());

//koneksi ke mongodb
db();

app.use(allRouter);
app.listen(process.env.PORT || 1212, (err) => {
  console.log("Server running on Port " + process.env.PORT || 1212);
});
